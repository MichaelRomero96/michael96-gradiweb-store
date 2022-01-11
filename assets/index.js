import { Product, CustomersCount, FulfillmentOrdersCount } from "./js/product/index.js"

window.addEventListener('DOMContentLoaded', () => {
    const product = new Product()
    product.init()
    const customersCount = new CustomersCount()
    const fulfillmentOrdersCount = new FulfillmentOrdersCount()
    fulfillmentOrdersCount.init()
    console.log('entrando,eddsited')
    customersCount.init()
})