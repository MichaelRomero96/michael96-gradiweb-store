class productVariants {
    constructor(idElement) {
        this.idElement = idElement;
    };
    variantListener() {
        this.allImagesList();
        this.allVariantsList().forEach((element, index) => {
            element.addEventListener('click', () => {
                this.changeProductImage(element)
            });
        });
    };
    changeProductImage(element) {
        const filteredImgByProduct = this.allImagesList().filter(i => i.attributes.id_product.value === element.attributes.id_product.value);
        if (filteredImgByProduct.length !== 0) {
            filteredImgByProduct.forEach((img, index) => {
                if (index === parseInt(element.attributes.variant_index.value)) {
                    img.classList.remove('img-hide')
                } else {
                    img.classList.add('img-hide')
                }
            });
        };
    };
    allVariantsList() {
        const elementsNodeList = document.querySelectorAll(this.idElement);
        return Array.from(elementsNodeList);
    };
    allImagesList() {
        const elementsNodeListImages = document.querySelectorAll('img');
        return Array.from(elementsNodeListImages);
    };
};

const variantElementButton = new productVariants('#variant-btn');

window.addEventListener('DOMContentLoaded', (e) => {
    variantElementButton.variantListener();
    variantBtnProduct = document.querySelector('#variant-btn');
});





