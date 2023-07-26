const initialState={
    query:'',
    category:{
        toys:false,
        hacking:false,
        sifi:false,
        accesories:false
    },
    price:0,
}
export const filterReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'query/change':
            return{...state,query:action.payload}
        default:
            return state
    }
}
