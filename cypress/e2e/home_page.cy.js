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

  it('create a post', () => {
    cy.visit('/');
    cy.get('.MuiStack-root > .MuiButtonBase-root').click();
    cy.get('[name="title"]').type('Almería').should('have.value', 'Almería');
    cy.get('textarea')
      .type('Almería is an Andalusian city where you can find the best beaches.')
      .should('have.value', 'Almería is an Andalusian city where you can find the best beaches.');
    cy.get('[name="image_url"]')
      .type('https://www.droomhuisspanje.nl/images/articulos/25/l_mojacar.jpg')
      .should('have.value', 'https://www.droomhuisspanje.nl/images/articulos/25/l_mojacar.jpg');
    cy.get('button').click();
  });

  it('edit a post', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(2)').click();
    cy.get('[name="title"]').should('have.value', 'Madrid').clear().type('Madrid').should('have.value', 'Madrid');
    cy.get('button').click();
  });

  it('delete a post', () => {
    cy.visit('/');
    cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardActions-root > :nth-child(3)').click();
  });
});
