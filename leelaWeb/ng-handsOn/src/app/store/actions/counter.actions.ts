import { createAction, props } from '@ngrx/store';

export const incriment = createAction('incriment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncriment = createAction(
  'customIncriment',
  props<{ value: number }>()
);

export const changeText = createAction('changeText');
