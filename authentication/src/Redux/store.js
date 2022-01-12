import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./combinereducer";

export const store = createStore(rootreducer,applyMiddleware(thunk));