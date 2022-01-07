import API from "../../services/api.js"
import { domElements } from "../../utils/dom-elements.js"

export class Product {
    init() {
        console.log('entrando')
        const listElements = Array.from(domElements().$actionButtons)
        console.log(listElements)
        listElements.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault()
                console.log(button.dataset.productId)
                const allImages = Array.from(domElements().$productImages)
                const activeImage = allImages.filter(image => image.classList.length !== 2)
                const activeProduct = activeImage.filter(productImage => productImage.dataset.productId === button.dataset.productId)
                const variantId = activeProduct[0].dataset.variantId
                this.addToCart(variantId)
            })
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
