Feature: Saudemo Checkout

    Background:
    Given User visit saucedemo
    
  Scenario Outline: Checkout product
    When User login to web
    And User get product page
    And User choose product
    And User checkout payment
    Then User logout from web