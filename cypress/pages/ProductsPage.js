
class ProductsPage {

    constructor() {
        this.features_items = '.features_items';
    }

    
    ClickProductCard(productCardNumber = 1) {
        if ( productCardNumber <= 34 ) {
            productCardNumber = productCardNumber + 2;
            cy.get(`${this.features_items} > div:nth-child(${productCardNumber})`)
                .find('.choose a')
                .click();
        }
        
    }


}

export const productsPage = new ProductsPage();