import API from "../../services/api.js"

export class FulFillmentOrderCount {
    async init() {
        const res = await API.getfulfillmentCountData()
        console.log(res)
    }
}