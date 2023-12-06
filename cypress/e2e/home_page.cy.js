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

describe('The user should be able to', () => {
  it('view a post detail', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1)').click();
  });
});
