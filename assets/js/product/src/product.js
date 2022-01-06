import API from "../../services/api.js"
import { domElements } from "../../utils/dom-elements.js"

export class Product {
    init() {
        console.log('entrando')
        console.log(domElements().$productButton)
        domElements().$productButton.addEventListener('click', (e) => this.addToCart(e))
    }
    addToCart = async (event) => {
        console.log(event)
        console.log(event.target.dataset)
        const variantId = event.target.dataset.variantId
        const items = [
            {
                id: Number(variantId),
                quantity: 1
            }
        ]
        const res = await API.addToCart(items)
        console.log(res)
    }
}
