import { combineReducers } from "redux";
import { toyreducer } from "./Slices/Toys";
import { filterReducer } from "./Slices/fiter";
import { sifiReducer } from "./Slices/Sifi";
import { hackingReducer } from "./Slices/Hacking";

export const slices=combineReducers(
    {
        filter:filterReducer,
        toys:toyreducer,
        sifi:sifiReducer,
        hacking:hackingReducer
    }
)