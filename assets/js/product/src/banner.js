import API from "../../services/api.js"

export class CustomersCount {
    async init() {
        const res = await API.getCustomersCountData()
        console.log(res)
    }
}

export class FulfillmentOrdersCount {
    async init() {
        const res = await API.getFulfillmentOrdersCountData()
        console.log(res)
    }
}