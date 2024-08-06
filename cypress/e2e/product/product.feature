Feature: Product page

  Scenario Outline: Apply multiple filter via category
    Given User visit e-commerce
    When User go to page cell phone
    And Access all filter
    And User input filter condition
    Then verify filter applied
