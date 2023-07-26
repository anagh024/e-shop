const initialState=[
    {name:'Ascetic RC Cars',price:8000,description:'Spped-40km/h,Rechargable',qunatity:2},
    {name:'Jbl cheetah',price:null,description:'Speed-80km/h,4WD',qunatity:0},
    {name:'Rc Excavator',price:6000,description:'Metal Shovel,2.4Ghz',qunatity:3},
    {name:'Hr rc Boat',price:25858,description:'Fast speed with 2 rechargable battery',qunatity:1},
    {name:'Rc tank',price:11432,description:'Miltary toy tank',qunatity:3}
]
 export const toyreducer=(state=initialState,action)=>{
    switch(action.type){
        default:
            return state
    }
}