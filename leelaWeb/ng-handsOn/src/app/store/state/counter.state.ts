export interface ICounterState {
  counter: number;
  text?: string;
}
export const initialState: ICounterState = {
  counter: 0,
  text: 'Khan web dev!',
};
