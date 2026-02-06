import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { PostState } from './post.state';

const getPostsState = createFeatureSelector<PostState>('posts');
export const getPost = createSelector(getPostsState, (state: PostState) => {
  return state.posts;
});

export const getPostById = (id: string) =>
  createSelector(getPostsState, (state: PostState) =>
    state.posts.find((post) => post.id === id)
  );
