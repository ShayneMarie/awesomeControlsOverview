Feature: Search By Id
    Scenario: Successful searching by ID
        Given I navigate to website
        When I enter existing ID in search input
        Then I see all information from the ID input