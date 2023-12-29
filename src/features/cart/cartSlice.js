import axios from "axios"
import { createSelector } from "reselect"
const initalValue = {
    status: "idle",
    entities: {}
}
function cartSlice(state = initalValue, action) {
    switch (action.type) {
        case "cart/LoadingCart": {
            return {
                ...state,
                status: "loading"
            }
        }
        case "cart/loadCartItems": {
            const newEntities = {}
            action.payload.map((item) => {
                newEntities[item.id] = item
            })
            return {
                ...state,
                status: "idle",
                entities: newEntities
            }
        }
        case "cart/addToCart": {
            return {
                ...state,
                status: "idle",
                entities: {
                    ...state.entities,
                    [action.payload.id]: action.payload
                }
            }
        }
        case "cart/removeItemCart": {
            let newEntities = state.entities
            delete newEntities[action.payload]
            return {
                ...state,
                status: "idle",
                entities: newEntities
            }
        }
        default: return state
    }
}
// function handle reducer
const _LoadingCart = () => ({ type: "cart/LoadingCart" })
const _loadCartItems = (data) => ({ type: "cart/loadCartItems", payload: data })
const _addToCart = (product) => ({ type: "cart/addToCart", payload: product })
const _removeItemCart = (productId) => ({ type: "cart/removeItemCart", payload: productId })
// function handle middelware
const addToCart = (productId) => (dispatch) => {
    dispatch(_LoadingCart())
    axios.post('api/cart/addItem', productId).then(({ data }) => dispatch(_addToCart(data)))
}
const loadCartItems = (dispatch) => {
    dispatch(_LoadingCart())
    axios.get('/api/cart').then(({ data }) => dispatch(_loadCartItems(data)))
}
const removeItemCart = (productId) => (dispatch) => {
    dispatch(_LoadingCart())
    axios.patch("/api/cart/removeItem", productId).then(() => dispatch(_removeItemCart(productId)))
}
// reselect functions
const selectItemsCartId = createSelector(
    state => state.cart,
    cart => ({
        entities: Object.values(cart.entities).map((item) => item.id),
        status: cart.status
    })
)
export { addToCart, selectItemsCartId, loadCartItems, removeItemCart }
export default cartSlice