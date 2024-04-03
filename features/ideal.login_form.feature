Feature: Test login form functionality

  Scenario Outline: The users cannot login to their account using wrong credentials
    Given the user is on login form page
    When user inputs their <username> and <password>
    And clicks on submit button
    Then a <warning> message pops up

    Examples: 
      | username      | password | warning                                                                                                             |
      | test@test.com | testpass | Pierakstīšanās kontā nebija veiksmīga un jūsu konts uz laiku ir slēgts. Lūdzu, uzgaidiet un vēlāk mēģiniet vēlreiz. |
