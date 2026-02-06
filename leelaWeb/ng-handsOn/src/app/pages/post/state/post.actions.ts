import { createAction, props } from '@ngrx/store';
import { IPost } from '../../../core/models/posts/post.model';

export const ADD_POST_ACTION = '[POST] Add Post';
export const UPDATE_POST_ACTION = '[POST] Update Post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: IPost }>());
export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: IPost }>()
);
