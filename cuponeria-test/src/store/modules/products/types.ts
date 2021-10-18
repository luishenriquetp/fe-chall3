import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type OrdersAction = ActionType<typeof actions>;

export interface OrdersState {
	readonly data: [];
	readonly selected: [];
	readonly page: number;
	readonly per_page: number;
	readonly loading: boolean;
}
