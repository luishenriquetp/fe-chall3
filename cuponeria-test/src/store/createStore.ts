import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { ProductsAction, ProductsState } from './modules/products/types';

export interface StoreState {
	auth: ProductsState;
}

export type StoreAction = ProductsAction;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
	const enhancer = applyMiddleware(...middlewares);

	return createStore(reducers, enhancer);
};
