describe('Lets hit a server', () => {
    it('Visit the home page and leave a comment on the first post', () => {
      cy.visit('http://localhost:3333')
    //   cy.get('a') // this workds for creationg a user but if we do create one we should also remove the user
    //     .eq(3)
    //     .click()
      cy.get('[id=email]')
        .type('test')
      cy.get('[id=password]')
        .type('test')
      cy.get('input[type=submit]')
        .click()
      cy.get('button')
        .eq(1)
        .click()
      cy.get('[id=correctAnswer]')
        .click()
      cy.get('[type=submit]')
        .click()
      cy.get('[id=addComment]')
        .type('Go Go Little minion, Pancho is proud of you!!')
      cy.get('[value=Submit]')
        .click()
      cy.get('.commentCard p')
        .eq(0)
        .should('have.text', 'Go Go Little minion, Pancho is proud of you!!')
  }) 
  //test for wrong answer 
  //test for right answer 
  //test for creating user 
  //test for updates  ONCE We set up MVP 
})
