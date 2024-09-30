
import './commands';
import 'cypress-mochawesome-reporter/register';
import { signupAndLoginPage } from '../pages';
import { navbar } from '../components';

Cypress.Commands.add('authenticate', (email, password) => { 
    signupAndLoginPage
        .typeLoginEmail(email)
        .typeLoginPassword(password)
        .clickLoginButton();
 });

 Cypress.Commands.add('newUserSignup', (name, email) => { 
    signupAndLoginPage
        .typeSignupName(name)
        .typeSignupEmail(email)
        .clickSignupButton();
 });

 Cypress.Commands.add('setValue', (selector, value) => {
    cy.get(selector).invoke('val', value).trigger('input');
  });

  Cypress.Commands.add('logout', () => {
    cy.get(navbar.logoutLink).click();
  });