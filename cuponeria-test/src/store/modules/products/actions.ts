import { action } from 'typesafe-actions';

export function resetOrders() {
	return action('@products/RESET_PRODUCTS');
}

export function getOrders({ selected, page, per_page }: { selected: []; page: number; per_page: number }) {
	return action('@products/GET_PRODUCTS', {
		selected,
		page,
		per_page
	});
}
export function setOrders({ data }: { data: [] }) {
	return action('@products/SET_PRODUCTS', {
		data
	});
}

export function setPage({ page }: { page: number }) {
	return action('@products/SET_PAGE', {
		page
	});
}

export function setPerPage({ per_page }: { per_page: number }) {
	return action('@products/SET_PER_PAGE', {
		per_page
	});
}

export function setSelected({ selected }: { selected: [] }) {
	return action('@products/SET_SELECTED', {
		selected
	});
}

export function sendOrder({ orderId }: { orderId: number }) {
	return action('@products/SEND_ORDER', {
		orderId
	});
}

export function updateOrder() {
	return action('@products/UPDATE_ORDER');
}

export function unloadOrders() {
	return action('@products/UNLOAD_PRODUCTS');
}
