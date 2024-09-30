import { navbar, cartModal, checkoutModal } from "../../components";
import { getProductById, getRandomUser, getRandomCreditCard } from "../../helpers";
import {
  productsPage,
  productDetailsPage,
  cartPage,
  signupPage,
  checkoutPage,
  paymentPage
} from "../../pages";

describe("Product Purchase and Checkout Flow", () => {

  it(`Product Purchase and Checkout - Desktop`, () => {
    // Set viewport for desktop (1366x768 resolution)
    cy.viewport(1366, 768);

    // Data preparation
    const productId = 3
    const product = getProductById(productId);
    const randomUser = getRandomUser();
    const { firstname, email } = randomUser;

    cy.visit("/");

    navbar.clickProduct();

    productsPage.ClickProductCard(productId);

    productDetailsPage
      .setProduct(product)
      .productNameExist()
      .productCategoryExist()
      .productAvailabilityExist()
      .productConditionExist()
      .productBrandExist();

    const randomQuantity = productDetailsPage.EnterProductQuantity();

    productDetailsPage.clickCartButton();

    cartModal
      .cartModalIsPresent()
      .cartTextIsPresent()
      .clickViewCart();

    cartPage
      .cartQuantityIsPresent(randomQuantity)
      .clickCheckoutButton();

    checkoutModal
      .checkoutModalIsPresent()
      .checkoutTextIsPresent()
      .clickRegisterAndLogin();

    cy.newUserSignup(firstname, email);

    signupPage.fillForm(randomUser);

    navbar.clickCart();
    cartPage.clickCheckoutButton();
    checkoutPage.clickPlaceOrder();

    const creditCard = getRandomCreditCard();
    paymentPage
      .proceedPayment(creditCard)
      .IsPaymentSuccess();
  });
});
