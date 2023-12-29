import { createServer } from "miragejs"
import { data } from "./data"
let cartItems;
if (localStorage.getItem("cartItems")) cartItems = JSON.parse(localStorage.getItem("cartItems"))
else cartItems = []
createServer({
    routes() {
        this.namespace = "api"
        this.get('/data', () => data)
        this.get('/cart', () => cartItems)
        this.post('/cart/addItem', (schema, request) => {
            const productId = request.requestBody
            const product = data.find(product => product.id == productId)
            cartItems.push(product)
            saveToLocalStoarge(cartItems)
            return product
        })
        this.patch("/cart/removeItem", (schema, request) => {
            const productId = request.requestBody;
            cartItems = cartItems.filter((cartItem) => cartItem.id != productId)
            saveToLocalStoarge(cartItems)
        })
    }

})
function saveToLocalStoarge(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}