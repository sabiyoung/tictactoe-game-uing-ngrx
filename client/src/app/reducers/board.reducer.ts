import { Action, createReducer, on } from '@ngrx/store';
import { ActionChangeSquare } from './../actions/board.actions';
import { ActionWinner } from 'src/app/actions/board.actions';


export const boardFeatureKey = 'board';

export interface State {
  squares: string[];
}

export const initialState: State = {
  squares: Array(9).fill('-'),
};

export const reducer = createReducer(
  initialState,
  on(ActionChangeSquare, (state, action) => {
    const { square, value } = action;
    const squares = [...state.squares];
    squares[square] = value;
    return { ...state, squares };
  }),
  on(ActionWinner, (state, action) => {
    const squares = [...state.squares];
    squares.fill('-');
    return { ...state, squares };
  }));


