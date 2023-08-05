import { combineReducers } from "redux";
import { filterReducer } from "./Slices/fiter";
import { dataReducer } from "./Slices/data";
import { cartReducer } from "./Slices/cart";


export const slices=combineReducers(
    {
        filter:filterReducer,
        data:dataReducer,
        cart:cartReducer
        
    }
)