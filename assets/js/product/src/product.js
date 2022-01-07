import API from "../../services/api.js"
import { domElements } from "../../utils/dom-elements.js"

export class Product {
    init() {
        console.log('entrando')
        console.log(domElements().$actionButton)
        domElements().$actionButton.addEventListener('click', (e) => {
            e.preventDefault()
            const variantId = domElements().$productButton.dataset.variantId
            this.addToCart(variantId)
        })
    }
    addToCart = async (variantId) => {
        const items = [
            {
                id: Number(variantId),
                quantity: 1
            }
        ]
        const res = await API.addToCart(items)
        console.log(res)
    };
};
