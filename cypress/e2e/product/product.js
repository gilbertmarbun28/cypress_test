/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import product from '../../pom/product';
    
    Given(`User visit e-commerce`, () => {
      cy.visit('https://www.ebay.com/');
    });
    
    When(`User go to page cell phone`, () => {
      product.navigateSearchByCategory().click();
      product.navigateCellPhoneAccessoriesCategory().click();
      product.navigateCellPhoneSmartphones().click();
      product.headerPage().should('have.text', 'Cell Phones & Smartphones');
    });
    
    When(`Access all filter`, () => {
      product.allFilterButton().click();
    });
    
    When(`User input filter condition`, () => {
      product.filterCapacity().click();
      product.menuBrand().click();
      product.filterBrand().click();
      product.menuConnectivity().click();
      product.filterConnectivity().click();
      product.buttonApply().click();
    });
    
    Then(`verify filter applied`, () => {
      product.filterApplied().should('have.text', '3 filters applied');
      product.filterStorageApplied().should('have.text','Storage Capacity');
      product.filterBrandApplied().should('have.text','Brand');
      product.filterConnectivityApplied().should('have.text','Connectivity');
    });

    When(`User input search {string}`, (products)=>{
      product.fieldSearch().type(products);
      product.filterCategory().select('58058');
      product.buttonSearch().click();
    });

    Then(`verify search result {string}`, (products)=>{
      product.labelResult().invoke('text').should('contain', products);
      product.firstProduct().invoke('text').should('contain', products);
    });