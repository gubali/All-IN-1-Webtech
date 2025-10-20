import { postReducer } from '../pages/post-data/state/post.reducer';
import { PostState } from '../pages/post-data/state/post.state';
import { counterReducer } from '../store/reducers/couter.reducers';
import { ICounterState } from '../store/state/counter.state';

export interface AppState {
  counter: ICounterState;
  posts: PostState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postReducer,
};
