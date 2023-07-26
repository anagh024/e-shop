const initialState=[
    {name:'District 9 Blaster',price:2425,description:'Plastic model of blaster',quantity:1},
    {name:'Holographic Sticker',price:423,description:'Authentic, holographic sticker asset tag by the Arasaka Corporation. Weather-proof.',quantity:20},
    {name:'Star wars blaster',price:67929,description:'Full Metal Blaster with Electronics E-12, GHV3 RGB Blaster Core, tags Star Wars Stormtrooper E-11 Blaster ',quantity:3},
    {name:'Lightsaber',price:16133,description:'Arvang Weathered Edition , Eco Smoothswing Chose Xeno V3 RGB or Pixel, tags star wars jedi sith mandalorian lightsaber ',quantity:2},
    {name:'Embryo Glass Jar',price:2883,description:'Alien Jar Xenomorph Specimen Facehugger Embryo Glass Jar Movie Prop Replica ',quantity:7}

]
export const sifiReducer=(state=initialState,action)=>{
    switch(action.type){
        default:
            return state
    }
}