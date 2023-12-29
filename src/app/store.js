import { applyMiddleware, combineReducers, createStore } from "redux";
import rootReducer from "./rootReducer";

const handleMiddleware = storeAPI => next => action => {
    if (typeof action == "function") return action(storeAPI.dispatch, storeAPI.action)
    return next(action)
}
const middlerwareEnhancer = applyMiddleware(handleMiddleware)
const store = createStore(rootReducer, middlerwareEnhancer)

export default store