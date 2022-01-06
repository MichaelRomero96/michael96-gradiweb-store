import API from "../../services/api"

export class Product {
    async addToCart(event) {
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