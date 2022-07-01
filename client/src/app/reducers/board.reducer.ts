import { Action, createReducer, on } from '@ngrx/store';


export const boardFeatureKey = 'board';

export interface State {
  squares: string[];
}

export const initialState: State = {
  squares: Array(9).fill('-'),
};

export const reducer = createReducer(
  initialState,

);
