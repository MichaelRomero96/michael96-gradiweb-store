//product change image
class ProductVariants {
    constructor(idElement) {
        this.idElement = idElement;
    };
    eventListener() {
        this.allImagesList();
        this.allVariantsList().forEach((element) => {
            element.addEventListener('click', () => {
                this.changeProductImage(element)
                console.log('clickclick')
            });
        });
    };
    changeProductImage(element) {
        const data = this.allImagesList()
        console.log(data)
        const filteredImgByProduct = data.filter(img => img.attributes.id_product.value === element.attributes.id_product.value);
        if (filteredImgByProduct.length !== 0) {
            filteredImgByProduct.forEach((img, index) => {
                if (index === parseInt(element.attributes.variant_index.value)) {
                    img.classList.remove('img-hide')
                } else {
                    img.classList.add('img-hide')
                };
            });
        };
    };
    allVariantsList() {
        const elementsNodeList = document.querySelectorAll(this.idElement);
        return Array.from(elementsNodeList);
    };
    allImagesList() {
        const elementsNodeListImages = document.querySelectorAll('.product-img');
        return Array.from(elementsNodeListImages);
    };
};

//variant button instance
const variantElementButton = new ProductVariants('#variant-btn');

//minicart
class MiniCartUI {
    constructor(cartIdButton) {
        this.cartIdButton = cartIdButton;
    };
    eventListener() {
        const element = this.selectButtonElement()
        element.addEventListener('click', () => {
            this.clickOnButton(element);
        });
    };
    clickOnButton(element) {
        console.log(element.classList)
        if (element.classList[0] === 'custom-header-cart-btn') {
            element.classList.replace('custom-header-cart-btn', 'custom-header-cart-btn-selected');
            this.openMiniCart();
        } else {
            element.classList.replace('custom-header-cart-btn-selected', 'custom-header-cart-btn');
            this.closeMiniCart();
        };
    };
    openMiniCart() {
        const element = this.selectMiniCartElement();
        console.log(element)
        element.classList.remove('custom-minicart-container-hide')
    };
    closeMiniCart() {
        const element = this.selectMiniCartElement();
        console.log(element)
        element.classList.add('custom-minicart-container-hide')
    };
    selectButtonElement() {
        const element = document.querySelector(this.cartIdButton);
        return element;
    };
    selectMiniCartElement() {
        const element = document.querySelector('#custom_minicart');
        return element;
    };
};

//Cart UI settings instance
const cartSettings = new MiniCartUI('#cart_header_btn');
const cartDetails = [];

class AddProductsToMiniCart {
    constructor(idAddToCartBtn) {
        this.idAddToCartBtn = idAddToCartBtn;
    };
    eventListener() {
        this.selectButtonsElements().forEach(button => {
            button.addEventListener('click', () => {
                const imagesList = variantElementButton.allImagesList();
                const variantList = variantElementButton.allVariantsList();
                const filteredImages = imagesList.filter(image => image.attributes.id_product.value === button.attributes.id.value);
                if (filteredImages.length !== 0) {
                    const displayImg = filteredImages.filter(img => img.classList.length !== 2);
                    const filteredVariantsList = variantList.filter(variant => variant.attributes.id_product.value === button.attributes.id.value);
                    const displayVariant = filteredVariantsList.filter(variant => variant.attributes.variant_index.value === displayImg[0].attributes.index.value);
                    const variantType = displayVariant[0].innerHTML;
                    this.createMinicartElement(displayImg[0], variantType);
                    console.log(displayImg);
                };
            });
        });
    };
    createMinicartElement(displayImg, variantType) {
        cartDetails.push([...cartDetails, {
            img: displayImg.attributes.src.nodeValue,
            title: displayImg.attributes.title_product.value,
            variant: variantType
        }]);
        console.log(cartDetails);
        const cartImg = document.createElement('img');
        cartImg.setAttribute('src', displayImg.attributes.src.nodeValue);
        const cartContainer = document.querySelector('#custom_minicart_container');
        cartContainer.appendChild(cartImg);
    };
    selectButtonsElements() {
        const element = document.querySelectorAll(this.idAddToCartBtn);
        console.log(element)
        return Array.from(element);
    };
};

const addProductsToMiniCart = new AddProductsToMiniCart('.add_to_cart_btn');

//DOM-Content general listener
window.addEventListener('DOMContentLoaded', (e) => {
    variantElementButton.eventListener();
    cartSettings.eventListener();
    addProductsToMiniCart.eventListener();
});








