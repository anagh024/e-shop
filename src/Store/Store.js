import { combineReducers } from "redux";
import { filterReducer } from "./Slices/fiter";
import { dataReducer } from "./Slices/data";

export const slices=combineReducers(
    {
        filter:filterReducer,
        data:dataReducer
    }
)