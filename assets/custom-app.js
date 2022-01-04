let loaded = false;

let variantBtnProduct;

class productVariants {
    constructor(idElement) {
        this.idElement = idElement;
    }
    variantListener() {
        this.allImagesList();
        this.allVariantsList().forEach((element, index) => {
            element.addEventListener('click', () => {
                this.changeProductImage(element)
            })
        });
    };
    changeProductImage(element) {
        this.allImagesList();
        console.log(element)
    }
    allVariantsList() {
        const elementsNodeList = document.querySelectorAll(this.idElement);
        return Array.from(elementsNodeList);
    }
    allImagesList() {
        const elementsNodeListImages = document.querySelectorAll('img');
        return Array.from(elementsNodeListImages);
    }

};

const variantElementButton = new productVariants('#variant-btn');

window.addEventListener('DOMContentLoaded', (e) => {
    console.log('entrando');
    variantElementButton.variantListener();
    variantBtnProduct = document.querySelector('#variant-btn');
});





