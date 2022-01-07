/**
* Stores all DOM elements with which it we will interact.
* @return {object} Total DOM elements
*/
export const domElements = () => {
    const elements = {
        $actionButtons: document.querySelectorAll('.add_to_cart_btn'),
        $productButton: document.querySelector("#product-variant-button"),
        $productImages: document.querySelectorAll("img")
    }

    return elements
}