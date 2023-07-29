const initialState={
    query:'',
    category:{
        Toys:false,
        Hacking:false,
        Sifi:false
},
    price:0
}
export const filterReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'query/change':
            return{...state,query:action.payload}
        case 'category/change':
            return{...state,category:{...state.category,...action.payload}}
        case 'price/change':
            return {...state,price:action.payload}
        default:
            return state
    }
}
