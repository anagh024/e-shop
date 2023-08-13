import { initialState } from "./intialState";

export const dataReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'data/query-check':
            return initialState.filter((i)=>i.name.includes(action.payload))
        case 'data/load-all':
            return initialState
        case 'data/price-check':
            return state.filter((i)=>i.price>=action.payload)
        case 'data/categorey':
            return initialState.filter((i)=>i.category===action.payload)
        case 'data/multipleCategory':
            return initialState.filter((i)=>action.payload.includes(i.category))
        case 'data/otherPlusCategorySingle':
            return state.filter((i)=>i.category===action.payload)
        case 'data/otherPlusCategoryMultiple':
            return initialState.filter((i)=>i.name.includes(action.payload.query)).filter((i)=>action.payload.array.includes(i.category))
            default:
            return state
    }
}