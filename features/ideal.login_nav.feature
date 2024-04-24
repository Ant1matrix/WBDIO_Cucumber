Feature: Test navigation to login page functionality

  Scenario: A user can navigate from landing page to login page
    Given the user is on landing page
    When user clicks on MyAccount button
    And clicks on Login button
    Then user is navigated to login page
