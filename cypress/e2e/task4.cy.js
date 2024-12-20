describe('BUY A ONLINE PRODUCT', () => {
  it('Swag Labs', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('input#user-name.form_input').type('standard_user')
    cy.get('input#password.form_input').type('secret_sauce')
    cy.get('input#login-button.btn_action').click()
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
    cy.get('#shopping_cart_container').click()
    cy.get('.btn_action').click()
    cy.get('#first-name').type('Shahidh')
    cy.get('#last-name').type('Afshar')
    cy.get('#postal-code').type('607803')
    cy.get('.btn_primary').click()
    cy.get('.summary_subtotal_label').should('contain',"$79.98")
    cy.get('.btn_action').click()
    cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
  })
})