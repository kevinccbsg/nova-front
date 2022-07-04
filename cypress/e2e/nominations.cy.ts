describe('Nominations page', () => {
  it('should render table', () => {
    cy.intercept({
      url: '/api/v1/nominations',
      method: 'GET',
    }, {
      fixture: 'nominations',
    }).as('nominationsList');
    cy.visit('/');
    cy.wait('@nominationsList');
  });
});
