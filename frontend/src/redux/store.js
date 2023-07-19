import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "thunk";

import {reducer as auth} from "./auth/reducer"
// import {reducer as Oem} from "./Oem/reducer"
const rootReducer = combineReducers({
    auth,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))