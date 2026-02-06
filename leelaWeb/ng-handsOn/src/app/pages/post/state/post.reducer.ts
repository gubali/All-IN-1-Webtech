import { createReducer, on } from '@ngrx/store';
import { initialState } from './post.state';
import { addPost, updatePost } from './post.actions';
import { IPost } from '../../../core/models/posts/post.model';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    const newPost: IPost = {
      ...action.post,
      id: (state.posts.length + 1).toString(),
    };

    return {
      ...state,
      posts: [...state.posts, newPost],
    };
  }),
  on(updatePost, (state, action) => {
    return {
      ...state,
    };
  })
);

export function postReducer(state = initialState, action: any) {
  return _postReducer(state, action);
}
