const initalState=[]
 export const cartReducer=(state=initalState,action)=>{
      switch(action.type){
        case 'cart/add-items':
            return [...state,action.payload]
        case 'cart/remove-items':
            
            return state.filter((i)=>i[0].name!==action.payload)
        default:
            return state;
      }
}