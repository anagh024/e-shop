const initialState=[
    {name:'Rubber Ducky',price:500,description:'It injects the keystrokes',quantity:5},
    {name:'Flipepr Zero',price:20378,description:'All in one hacking machine',quantity:2},
    {name:'Wifi hacking Watch',price:12000,description:'Disrupt wifi connections',quantity:3},
    {name:'Rasberry pi',price:7000,description:'Single Board Computer',quantity:2},
    {name:'Hunter cat',price:7500,description:'ATM Card Skimmer Detector.',quantity:3}

]
export const hackingReducer=(state=initialState,action)=>{
    switch(action.type){
        default:
            return state
    }
}