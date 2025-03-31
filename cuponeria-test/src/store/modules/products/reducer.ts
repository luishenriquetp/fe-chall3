import { OrdersState, OrdersAction } from './types';

const initialState: OrdersState = {
	data: [],
	selected: [],
	page: 1,
	per_page: 10,
	loading: false
};

export default function orders(state = initialState, action: OrdersAction): OrdersState {
	switch (action.type) {
		case '@orders/RESET_ORDERS':
			return { ...state, ...initialState };
		case '@orders/GET_ORDERS':
			return {
				...state,
				loading: true
			};
		case '@orders/SET_ORDERS':
			return {
				...state,
				data: action.payload.data,
				loading: false
			};
		case '@orders/SET_PAGE':
			return {
				...state,
				page: action.payload.page
			};
		case '@orders/SET_PER_PAGE':
			return {
				...state,
				page: 1,
				per_page: action.payload.per_page
			};
		case '@orders/SET_SELECTED':
			return {
				...state,
				selected: action.payload.selected
			};
		case '@orders/SEND_ORDER':
			return {
				...state,
				loading: true
			};
		case '@orders/UPDATE_ORDER':
			return {
				...state,
				// data: { ...state.data, ...action.payload.order },
				loading: false
			};
		case '@orders/UNLOAD_ORDERS':
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}
