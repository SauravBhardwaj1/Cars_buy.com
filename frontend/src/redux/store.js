import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "thunk";

import {reducer as auth} from "./auth/reducer"
import {reducer as Oem} from "./Oem/reducer"
const rootReducer = combineReducers({
    auth,
    Oem
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))