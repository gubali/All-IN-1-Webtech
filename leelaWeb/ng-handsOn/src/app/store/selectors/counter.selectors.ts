import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounterState } from '../state/counter.state';

const getCounterState = createFeatureSelector<ICounterState>('counter');
export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
  return state.text;
});
