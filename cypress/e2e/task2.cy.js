describe('Login', () => {
  it('passes', () => {
    cy.visit('https://www.flipkart.in')
    cy.get('.Pke_EE').type('Mobiles{enter}')
    cy.get('.XqNaEv').eq(1).click()
  })
})