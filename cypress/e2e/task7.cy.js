describe('Login test with env variables', () => {
    let cred
        Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    before(() => {
      cy.fixture('login').then((log) => {
        cred = log;
      })
    })
    beforeEach(()=>{
      cy.visit('https://practicetestautomation.com/practice-test-login/')
    })
      it('login positive',()=>{
        cy.get('input#username').type(cred.positive.username)
        cy.get('input#password').type(cred.positive.password)
        cy.get('button#submit').click()
        cy.get('a[class*="wp-block-button"]').should('be.visible').click()
    })
      it('login negative username',()=>{
        cy.get('input#username').type(cred.negative1.username)
        cy.get('input#password').type(cred.negative1.password)
        cy.get('button#submit').click() 
        cy.get('section #error').should('have.text','Your username is invalid!')
    })
      it('login with invalid password',()=>{
        cy.get('input#username').type(cred.negative2.username)
        cy.get('input#password').type(cred.negative2.password)
        cy.get('button#submit').click() 
        cy.get('section #error').should('have.text','Your password is invalid!')
  }) 
})