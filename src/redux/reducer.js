import {INCREMENT,DECREMENT} from './action'
export const initialState = 0;

export const Reducer = (state = initialState, action)=>{
    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state
    }
}

