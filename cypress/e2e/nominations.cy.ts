describe('Nominations page', () => {
  it('should render table', () => {
    cy.intercept({
      url: '/api/v1/nominations',
      method: 'GET',
    }, {
      fixture: 'nominations',
    }).as('nominationsList');
    cy.visit('/');
    cy.wait('@nominationsList')
      .then(({ response }) => {
        const rows = (response || {}).body.data;
        rows.forEach((row) => {
          cy.get(`[data-row-key=${row.id}]`).should('be.visible');
        });
        cy.get('[data-cy=table-expand-button]').eq(0).click();
        cy.get('[data-cy=nominations-table]').should('contain', rows[0].description);
      });
    cy.get('[data-cy=new-nomination-button]').should('be.visible').click();
    cy.url().should('include', '/nominate');
  });
});
