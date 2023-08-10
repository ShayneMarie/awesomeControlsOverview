Feature: Search By Name
    Scenario: Successful searching by Name
        Given I navigate to website
        When I enter existing name in search input
        Then I see all information from the name input