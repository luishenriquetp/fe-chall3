import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import Router from 'next/router';

import { setOrders, resetOrders, getOrders, sendOrder, unloadOrders, updateOrder } from './actions';
import swal from '@sweetalert/with-react';
import { store } from '~/store';
import QueryFactory from '~/components/utils/query-factory';

import { TMS_API } from '~/services/API';

//FETCH DE PEDIDOS DO INTELLIPOST
export function* fetchOrders({ payload }: ActionType<typeof getOrders>) {
	const { selected, page, per_page } = payload;
	const queryString = QueryFactory(selected);

	const { stores } = store.getState();
	const { selected_store } = stores;

	try {
		const resp = yield call(
			TMS_API.get,
			`api/v1/stores/${selected_store.id}/orders/dispatchments?currentPage=${page}&pageSize=${per_page}${queryString}`
		);
		resp.data.data.map((item, index) => (item.id = index));
		yield put(setOrders({ data: resp.data.data }));
	} catch (err) {
		yield put(resetOrders());
		// swal('Erro', 'Ocorreu um erro. Tente novamente.', 'error');
	}
}

//ENVIO DE PEDIDO PARA DESPACHO
export function* sendShipmentOrder({ payload }: ActionType<typeof sendOrder>) {
	const { orderId } = payload;
	const { stores } = store.getState();
	const { selected_store } = stores;
	try {
		const resp = yield call(TMS_API.post, `api/v1/stores/${selected_store.id}/dispatchments`, orderId);
		const responseDocument = resp.data;
		if (responseDocument.success === false) {
			swal('Erro', responseDocument.message, 'error');
			yield put(updateOrder());
		} else {
			swal('Ok!', 'Pedido reenviado para o despacho.', 'success').then(() => Router.reload());
		}
	} catch (err) {
		yield put(unloadOrders());
		swal('Erro', 'Não foi possível reenviar o pedido para o despacho.', 'error');
	}
}

export default all([
	takeLatest('@orders/GET_ORDERS', fetchOrders),
	takeLatest('@orders/SEND_ORDER', sendShipmentOrder)
]);
