import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import {reducer as productReducer } from "./allProducts/reducer"
import {reducer as cartReducer} from "./cart/reducer"
import {reducer as userReducer} from "./user/reducer"
import thunk from "redux-thunk"
const allreducer=combineReducers({productReducer,cartReducer,userReducer})
export const store=legacy_createStore(allreducer,applyMiddleware(thunk)) 