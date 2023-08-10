import '@testing-library/cypress/add-commands';

Given('I navigate to website', () => {
    cy.visit('/GridDemo/Filtering');
})

When('I enter existing name in search input', () => {
    cy.scrollTo('center');
    cy.get('#txtsearch').type(`Sam{enter}`, { force: true });
})

Then('I see all information from the name input', () => {
    cy.findAllByText('929').should('exist');
    cy.findAllByText('Sam').should('exist');
    cy.findAllByText('French toast').should('exist');
    cy.findAllByText('Central Perk').should('exist');
    cy.findAllByText('Redridge Mountains').should('exist');
    cy.findAllByText('Omu Man').should('exist');
})