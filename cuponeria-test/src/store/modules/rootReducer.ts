import { combineReducers } from 'redux';

import { StoreState } from '../createStore';

import products from './products/reducer';

export default combineReducers<StoreState>({
	products
});
