import { createReducer, on } from "@ngrx/store";
import { decriment, incriment, reset } from "./counter.action";

const initialState = { count: 0 };
const _counterReducer = createReducer(initialState, on(incriment, (state)=>{
return {
    ...state,
    counter: state.count + 1
}
}),
on(decriment, (state)=>{
    return {
        ...state,
        counter: state.count -1
    }
    }),
    on(reset, (state)=>{
        return {
            ...state,
            counter:0
        }
        }),

);
export function counterReducer(state:any, action:any){
return _counterReducer(state, action);
}