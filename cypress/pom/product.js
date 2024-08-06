export default class productPage {
    static navigateSearchByCategory() {
        return cy.get('[id="gh-shop-a"]');
    }
    static navigateCellPhoneAccessoriesCategory(){
        return cy.get('a').contains('Cell phones & accessories').eq(0);
    }
    static navigateCellPhoneSmartphones(){
        return cy.get('a').contains('Cell Phones & Smartphones').eq(0);
    }
    static headerPage(){
        return cy.get('[class*="b-pageheader__text"]');
    }
    static allFilterButton(){
        return cy.get('[class*="brm__all-filters"]');
    }
    static filterCapacity(){
        return cy.contains('label','1 TB');
    }
    static menuBrand(){
        return cy.get('[data-aspecttitle="aspect-Brand"]');
    }
    static filterBrand(){
        return cy.contains('label','Apple');
    } 
    static menuConnectivity(){
        return cy.get('[data-aspecttitle="aspect-Connectivity"]');
    }
    static filterConnectivity(){
        return cy.contains('label','5G');
    }
    static buttonApply(){
        return cy.contains('button','Apply');
    }
    static filterApplied(){
        return cy.get('[class="brm__item brm__item--applied"]');
    }
    static filterStorageApplied(){
        return cy.get('[class*="x-flyout brm__flyout brm__flyout--selected"]').eq(1);
    }
    static filterBrandApplied(){
        return cy.get('[class*="x-flyout brm__flyout brm__flyout--selected"]').eq(2);
    }
    static filterConnectivityApplied(){
        return cy.get('[class*="x-flyout brm__flyout brm__flyout--selected"]').eq(3);
    }
}