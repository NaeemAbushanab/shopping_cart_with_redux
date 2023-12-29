import { combineReducers } from "redux";
import cartSlice from "../features/cart/cartSlice";

const rootReducer = combineReducers({
    cart: cartSlice
})

export default rootReducer