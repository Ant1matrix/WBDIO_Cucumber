Feature: Test iDeal search function

  Scenario: the user should type product name in search field and retrieve a relevant product
    Given the user is on iDeal landing page
    When the user clicks on search icon
    And the user types iPhone 15 Pro in search field
    And clicks on Enter key
    Then user is taken to catalogue page with relevant product
