const initalState=[]
 export default cartReducer=(state=initalState,action)=>{
      switch(action.type){
        case 'cart/add-items':
            return [...state,action.payload]
        case 'cart/remove-items':
            return state.filter((i)=>i.name!==action.payload)
      }
}