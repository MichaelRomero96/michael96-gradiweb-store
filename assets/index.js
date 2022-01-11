import { Product, FulFillmentOrderCount } from "./js/product/index.js"

window.addEventListener('DOMContentLoaded', () => {
    const product = new Product()
    product.init()
    const fulfillmentOrderCount = new FulFillmentOrderCount()
    console.log('entrando')
    fulfillmentOrderCount.init()
})