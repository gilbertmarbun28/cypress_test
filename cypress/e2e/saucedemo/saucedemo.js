import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import saucedemo from '../../pom/saucedemo';
    
    Given(`User visit saucedemo`, () => {
      cy.visit('https://www.saucedemo.com/');
    });
    
    When(`User login to web`, () => {
        saucedemo.fieldUsername().click().type('standard_user');
        saucedemo.fieldPass().click().type('secret_sauce');
        saucedemo.loginButton().click();
    });
    
    When(`User get product page`, () => {
        saucedemo.labelPage().should('have.text','Products');
    });

    Then(`User choose product`, () => {
        saucedemo.firstProduct().click();
        saucedemo.secondProduct().click();
        saucedemo.shopCartValue().should('have.text', '2');
        saucedemo.shopCart().click();
    });
    
    Then(`User checkout payment`, () => {
        saucedemo.labelPage().should('have.text','Your Cart');
        saucedemo.cartItemName().eq(0).should('contain','Backpack');
        saucedemo.cartItemName().eq(1).should('contain','Bike');
        saucedemo.checkoutButton().click();
        saucedemo.firstName().click().type('Tony');
        saucedemo.lastName().click().type('Stark');
        saucedemo.postalCode().click().type('777');
        saucedemo.continueButton().click();
        saucedemo.finishButton().click();
        saucedemo.homeButton().click();
    });

    Then(`User logout from web`, () => {
        saucedemo.sidebarButton().click();
        saucedemo.logoutButton().click();
    });
