import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/counter.state';
import { decrement, incriment, reset } from '../actions/counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(incriment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export function counterReducer(
  state: { counter: number } | undefined,
  action: any
) {
  return _counterReducer(state, action);
}
// NgRx = Library System
// Store = Library 📚
// Action = Request 📝
// Reducer = Librarian 👩‍🏫
// Effect = Helper 🚗
// Selector = Search Tool 🔍
// State = Books 📖
