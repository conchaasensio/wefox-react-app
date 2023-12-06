describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.contains('wefox');
  });

  it('shows a list of posts', () => {
    cy.visit('/');
    cy.get('.MuiTypography-h5').should('have.length.gt', 1);
  });
});
