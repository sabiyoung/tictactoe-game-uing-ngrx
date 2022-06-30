import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromBoard from './board.reducer';


export interface State {

  [fromBoard.boardFeatureKey]: fromBoard.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromBoard.boardFeatureKey]: fromBoard.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
