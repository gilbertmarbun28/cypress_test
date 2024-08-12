Feature: Product Search Page

  Scenario Outline: Access product via search
    Given User visit '<url>'
    When User input searching '<product>' on '<url>'
    Then verify searching result '<product>' on '<url>'

    Examples:
      |e-commerce | url | product |
      |amazon | https://www.amazon.com/ | iPhone 15 Pro |
      # |blibli | https://www.blibli.com/ | iPhone 15 Pro|
      # |tokopedia | https://www.tokopedia.com/ | iPhone 15 Pro|
      |ebay | https://www.ebay.com/ | iPhone 15 Pro |
