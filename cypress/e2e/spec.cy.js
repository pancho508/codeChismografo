describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('Lets hit a server', () => {
  it('Visit the Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
      .click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})

// NOTES 
/* 
-describe and it come from Mocha
-expect comes from Chai




*/
