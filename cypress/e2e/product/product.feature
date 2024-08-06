Feature: Product page

    Background:
    Given User visit e-commerce
    
  Scenario Outline: Apply multiple filter via category
    When User go to page cell phone
    And Access all filter
    And User input filter condition
    Then verify filter applied

  Scenario Outline: Access product via search
    When User input search '<products>'
    Then verify search result '<products>'

    Examples:
      |products|
      |MacBook|
      |Dell|
      |Lenovo|