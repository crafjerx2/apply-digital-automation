import { faker } from '@faker-js/faker';

class ProductDetailsPage  {

    constructor() {
        this.product;
        this.cartButton = '.cart';
        this.quantity = '#quantity';
    }

    setProduct(product) {
        this.product = product;
        return this;
    }
  
    productNameExist() {
        const { name } = this.product;

        cy.contains(name).should('be.visible');
        return this;
    }

    productCategoryExist() {
        const { category, sub_category } = this.product;

        cy.contains(`Category: ${category} > ${sub_category}`).should('be.visible');
        return this;
    }

    productAvailabilityExist() {
        const { availability } = this.product;

        cy.contains(`Availability: ${availability}`).should('be.visible');
        return this;
    }

    productConditionExist() {
        const { condition } = this.product;

        cy.contains(`Condition: ${condition}`).should('be.visible');
        return this;
    }

    productBrandExist() {
        const { brand } = this.product;

        cy.contains(`Brand: ${brand}`).should('be.visible');
        return this;
    }

    clickCartButton() {
        cy.get(this.cartButton).click();
        return this;
    }

    EnterProductQuantity() {
        const randomQuantity = faker.number.int({ min: 1, max: 20 });

        cy.get(this.quantity).click();
        cy.get(this.quantity).clear().type(randomQuantity);
        cy.get(this.quantity).should('have.value', randomQuantity);

        return randomQuantity;
    }
}

export const productDetailsPage = new ProductDetailsPage();
