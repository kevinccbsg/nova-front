describe('Nominate page', () => {
  it('should create and test the nominate form', () => {
    const expectedValues = {
      email: 'test@test.com',
      description: 'lorem ipsum',
      score: {
        involvement: 10,
        talent: 2,
      },
    };
    cy.intercept({
      url: '/api/v1/nominations',
      method: 'GET',
    }, {
      fixture: 'nominations',
    }).as('nominationsList');
    cy.intercept({
      url: '/api/v1/members/3cd94258-73ce-4f86-83f8-9ff016df4a85/nominations',
      method: 'POST',
    }, {
      body: { id: '20c830ae-58b3-4525-a996-8c0fcee71827' },
    }).as('nominationRequest');
    cy.visit('/nominate');
    cy.get('[data-cy=nominate-submit-button]').click();
    cy.get('[data-cy=input-error-email]').should('be.visible');
    cy.get('[data-cy=input-error-description]').should('be.visible');
    cy.get('[data-cy=input-email]').type(expectedValues.email);
    cy.get('[data-cy=input-description]').type(expectedValues.description);
    cy.controlledInputChange('[data-cy=input-involvement]', expectedValues.score.involvement);
    cy.controlledInputChange('[data-cy=input-talent]', expectedValues.score.talent);
    cy.get('[data-cy=nominate-submit-button]').click();
    cy.wait('@nominationRequest')
      .then(({ request }) => {
        const { body } = request;
        expect(body).to.eql(expectedValues);
      });
    cy.url().should('not.include', '/nominate');
  });
});
