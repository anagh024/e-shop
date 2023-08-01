import { initialState } from "./intialState";
export const dataReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'data/single-check':
            return initialState.filter((i)=>i.category===action.payload)
        default:
            return state
    }
}