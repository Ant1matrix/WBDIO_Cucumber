Feature: Test adding to basket feature and item counter update

  Scenario: The user clicks on add to basket button and item counter reflects the change in the basket
    Given the user is on item description page
    When user clicks on addToBasket button
    Then the user is taken to success page and item counter is set to 1
