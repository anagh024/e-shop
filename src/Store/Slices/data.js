import { initialState } from "./intialState";

export const dataReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'data/query-check':
            return state.filter((i)=>i.name.includes(action.payload))
        case 'data/single-check':
            return state.filter((i)=>i.category===action.payload)
        case 'data/load-all':
            return initialState
            case 'data/multi-check':
            return state.concat(initialState.filter((i)=>i.category===action.payload))
        case 'data/uncheck-multi':
            return state.filter((i)=>(i.category!==action.payload))
        case 'data/price-check':
            return state.filter((i)=>i.price>=action.payload)
        
            default:
            return state
    }
}