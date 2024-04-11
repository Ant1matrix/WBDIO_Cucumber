Feature: Test removing from basket feature and item counter update

  Scenario: the user should be able to remove items from basket and see the item counter update
    Given the user is on basket page
    When there is an item in the basket
    And the user clicks on remove item
    Then the item counter is updated to 0
