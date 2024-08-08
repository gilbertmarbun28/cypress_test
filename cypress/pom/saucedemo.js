export default class productPage {
    static fieldUsername() {
        return cy.get('[data-test="username"]');
    }
    static fieldPass(){
        return cy.get('[data-test="password"]');
    }
    static loginButton(){
        return cy.get('[data-test="login-button"]');
    }
    static labelPage(){
        return cy.get('[data-test="title"]');
    }
    static firstProduct(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }
    static secondProduct(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }
    static shopCart(){
        return cy.get('[data-test="shopping-cart-link"]');
    }
    static shopCartValue(){
        return cy.get('[data-test="shopping-cart-badge"]');
    }
    static cartItemName(){
        return cy.get('[data-test="inventory-item-name"]');
    }
    static checkoutButton(){
        return cy.get('[data-test="checkout"]');
    }
    static firstName(){
        return cy.get('[data-test="firstName"]');
    }
    static lastName(){
        return cy.get('[data-test="lastName"]');
    }
    static postalCode(){
        return cy.get('[data-test="postalCode"]');
    }
    static continueButton(){
        return cy.get('[data-test="continue"]');
    }
    static finishButton(){
        return cy.get('[data-test="finish"]');
    }
    static homeButton(){
        return cy.get('[data-test="back-to-products"]');
    }
    static sidebarButton(){
        return cy.get('[class*="bm-burger-button"]');
    }
    static logoutButton(){
        return cy.get('[data-test="logout-sidebar-link"]');
    }
}