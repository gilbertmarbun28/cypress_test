/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import product from '../../pom/product';

Given(`User visit {string}`, (url) => {
    cy.visit(url, { failOnStatusCode: false });
  });

When(`User input searching {string} on {string}`, (products, url)=>{
    if(url==='https://www.ebay.com/'){
      product.fieldSearch().type(products);
      product.buttonSearch().click();
      product.buttonSort().click();
      product.sortAscEbay().click();
      // product.fieldSearchTokopedia().click().type(products,'{enter}');
      // product.filterTokopedia().click();
      // product.filterAscTokopedia().click();
      // product.fieldSearchBlibli().click().type(products);
      // product.buttonSearchBlibli().click();
      // product.filterBlibli().click();
      // product.filterAscBlibli().invoke('val', 'Termurah').trigger('change');

    }else{
      product.searchFieldAmazon().click().type(products);
      product.iconSearchAmazon().click();
      product.labelResultAmazon().should('contain',products);
      product.buttonFilterAmazon().click();
      product.filterAscAmazon().invoke('val','Price + Shipping: lowest first').trigger('change');
    }
  });

  // Then(`verify searching result {string} on {string}`, (url) => {
  //   if (url === 'https://www.ebay.com/') {
  //     product.labelResult().invoke('text').should('contain', 'iPhone');
  //     product.firstProductEbay().should('contain', 'iPhone');
  //     const listings = [];
  //     product.getProducts().each((element) => {
  //       const title = element.find('h3.lvtitle').text();
  //       const price = element.find('span.lvprice').text();
  //       const url = element.find('a.vip').attr('href');
  
  //       listings.push({ title, price, url });
  //     });
  //     cy.writeFile('listings.json', JSON.stringify(listings));
  //   } else {
  //     product.labelResultAmazon().invoke('text').should('contain', 'iPhone');
  //     product.firstProductAmazon().invoke('text').should('contain', 'iPhone');
  //     const listings = [];
  //     product.getProducts().each((element) => {
  //       const title = element.find('span.a-size-medium.a-color-base.a-text-normal').text();
  //       const price = element.find('span.a-price > span.a-offscreen').text();
  //       const url = element.find('a.a-link-normal.a-text-normal').attr('href');
  
  //       listings.push({ title, price, url });
  //     });
  //     cy.writeFile('listings.json', JSON.stringify(listings));
  //   }
  // });

  Then(`verify searching result {string} on {string}`, (url) => {
    if (url === 'https://www.ebay.com/') {
      product.labelResult().invoke('text').should('contain', 'iPhone');
      product.firstProductEbay().should('contain', 'iPhone');
      cy.get('h3.lvtitle').retry({ retries: 5, timeout: 10000 }).should('be.visible').each(($el) => {
        const title = $el.text();
        const price = $el.siblings('span.lvprice').text();
        const url = $el.find('a.vip').attr('href');
  
        console.log('Title:', title);
        console.log('Price:', price);
        console.log('URL:', url);
      });
    } else {
      product.labelResultAmazon().invoke('text').should('contain', 'iPhone');
      product.firstProductAmazon().invoke('text').should('contain', 'iPhone');
      product.getProducts.retry({ retries: 5, timeout: 10000 }).should('be.visible').each(($el) => {
        const title = $el.text();
        const price = $el.siblings('span.a-price').find('span.a-offscreen').text();
        const url = $el.closest('a.a-link-normal.a-text-normal').attr('href');
  
        console.log('Title:', title);
        console.log('Price:', price);
        console.log('URL:', url);
      });
    }
  });