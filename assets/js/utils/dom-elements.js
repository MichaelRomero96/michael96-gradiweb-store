/**
* Stores all DOM elements with which it we will interact.
* @return {object} Total DOM elements
*/
export const domElements = () => {
    const elements = {
        $actionButton: document.querySelector('#action-button'),
        $productButton: document.querySelector("#product-button")
    }

    return elements
}