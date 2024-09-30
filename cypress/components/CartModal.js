
class CartModal {

    constructor(){
        this.cartModalId = '#cartModal';
    }

    cartModalIsPresent() {
        cy.get(this.cartModalId).should('have.class', 'show')
        return this;
    }

    cartTextIsPresent() {
        cy.get(this.cartModalId)
        .find('.modal-body > p')
        .eq(0)
        .should('have.text', 'Your product has been added to cart.');
        return this;
    }

    clickViewCart() {
        cy.get(this.cartModalId).find('.modal-body a').click();
        return this; 
    }
}

export const cartModal = new CartModal();
