
class CartPage {

    constructor() {
        this.checkoutButton = '.check_out';
        this.cart_quantity = '.cart_quantity > button';
    }

    cartQuantityIsPresent(quantity) {
        cy.get(this.cart_quantity).should('have.text', quantity);
        return this;
    }

    clickCheckoutButton() {
        cy.get(this.checkoutButton).click();
        return this;
    }
  
}

export const cartPage = new CartPage();
