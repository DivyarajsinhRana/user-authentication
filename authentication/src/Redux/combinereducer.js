import { combineReducers } from "redux";
import robotreducer from "./reducers/robotreducer";
import cartReducer from "./reducers/cartreducer";
import stockreducer from "./reducers/stockreducer";
import quantityreducer from "./reducers/quantityreducer";


const rootreducer = combineReducers({
    robots : robotreducer,
    cart : cartReducer,
    quantity:quantityreducer,
    stock : stockreducer
})
export default rootreducer