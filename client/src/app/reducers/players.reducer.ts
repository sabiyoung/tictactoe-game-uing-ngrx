import { Action, createReducer, on } from '@ngrx/store';
import { ActionWinner } from '../actions/board.actions';
import { ActionNextTurn } from './../actions/players.actions';


export const playersFeatureKey = 'players';

export interface State {
  players: string[];
  turn: 0 | 1;
  score: number[];
}

export const initialState: State = {
  players: ['X', 'O'],
  turn: 0,
  score: [0, 0]
};

export const reducer = createReducer(
  initialState,
  on(ActionNextTurn, (state) => {
    return {...state,
      turn: state.turn === 0 ? 1 : 0
    }
  }),
  on(ActionWinner, (state, action) => {
    const { winner } = action;
    const score = [...state.score];
    score[winner === 'X'? 0:1 ]++;
    return {...state, score};
  })
);
