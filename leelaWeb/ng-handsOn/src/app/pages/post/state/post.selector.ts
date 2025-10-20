import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';

const getPostsState = createFeatureSelector<PostState>('posts');
export const getPost = createSelector(getPostsState, (state: PostState) => {
  return state.posts;
});
