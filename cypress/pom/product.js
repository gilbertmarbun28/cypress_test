export default class productPage {
    //tokopedia
    static fieldSearchTokopedia(){
        return cy.get('[data-testid="txtHeaderSearchBar"]');
        // type('{enter}')
    }
    static labelResultTokopedia(){
        return cy.get('[data-testid="dSRPSearchInfo"]').find('strong');
    }
    static filterTokopedia(){
        return cy.get('[data-testid="result-header-wrapper"]').find('div');
    }
    static filterAscTokopedia(){
        return cy.get('[data-unf="select-menu-item-btn"]').eq(4);
//         cy.get('#item-container > a > div > div > div') // Replace with appropriate selectors
//   .should('exist');
    }

    //blibli
    static fieldSearchBlibli(){
        return cy.get('[class*="searchbox__main"]');
    }
    static buttonSearchBlibli(){
        return cy.get('[class*="searchbox__search-icon"]');
    }
    static filterBlibli(){
        return cy.get('[class*="blu-dropdown__trigger"]');
    }
    static filterAscBlibli(){
        return cy.get('[class*="blu-list__item-heading"]').eq(3).find('label');
    }
    static firstProductTokopedia(){
        return cy.get('[class*="blu-product__name"]').eq(0);
    }
    
    //ebay
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
    static buttonSort(){
        return cy.get('[class*="srp-sort srp-sort--filter-evolution"]');
    }
    static sortAscEbay(){
        // return cy.get('[class*="fake-menu-button__button btn btn--small btn--secondary"]').eq(0);
        cy.get('.fake-menu-button__item span').contains('Price + Shipping: lowest first').should('exist');
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
    static fieldSearch(){
        return cy.get('[placeholder="Search for anything"]');
    }
    static filterCategory(){
        return cy.get('#gh-cat');
    }
    static buttonSearch(){
        return cy.get('[id="gh-btn"]');
    }
    static labelResult(){
        return cy.get('.srp-controls__count-heading');
    }
    static firstProductEbay(){
        return cy.get('[class*="s-item__title"]').find('span').eq(2);
    }
    //amazon
    static searchFieldAmazon(){
        return cy.get('[id="twotabsearchtextbox"]');
    }
    static iconSearchAmazon(){
        return cy.get('[id="nav-search-submit-button"]');
    }
    static labelResultAmazon(){
        return cy.get('span');
    }
    static buttonFilterAmazon(){
        return cy.get('[class*="a-dropdown-label"]');
    }
    static filterAscAmazon(){
        return cy.get('[id="s-result-sort-select_1"]');;
    }
    static firstProductAmazon(){
        return cy.get('[class*="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').find('span').contains('iPhone 15 Pro');
    }
    static getProducts(){
        return cy.get('[class*="a-size-medium.a-color-base.a-text-normal"]');
    }
}