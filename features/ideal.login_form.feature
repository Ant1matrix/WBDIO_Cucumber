Feature: Test login form functionality

  Scenario: The users cannot login to their account using wrong credentials
        
        Given the user is on login form page
        When user inputs their username and password
        And clicks on submit button
        Then a warning message pops up