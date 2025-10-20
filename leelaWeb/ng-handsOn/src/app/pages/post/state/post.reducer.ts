import { createReducer } from '@ngrx/store';
import { initialState } from './post.state';

const _postReducer = createReducer(initialState);

export function postReducer(state = initialState, action: any) {
  return _postReducer(state, action);
}
