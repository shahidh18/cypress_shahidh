describe('Login test with env variables', () => {
  it('login page', () => {
    cy.visit(Cypress.env('test').url)
    cy.get('#user-name').type(Cypress.env('test').username)
    cy.get('#password').type(Cypress.env('test').password)
    cy.get('#login-button').click()
    cy.get('#inventory_container .inventory_item').each(($results)=>{
        if($results.text().includes("Light")){
            cy.wrap($results).find('[class="btn_primary btn_inventory"]').click()
        }
        if($results.text().includes("Jacket")){
            cy.wrap($results).find('[class="btn_primary btn_inventory"]').click()
        }
    })
    cy.get('#shopping_cart_container a').click()
  })
})
