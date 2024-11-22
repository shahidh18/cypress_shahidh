describe('Login test with env variables', () => {
  let tdata;
  before(()=>{
    cy.fixture('example').then((testdata)=>{
      tdata=testdata;
    })
  })
  it('login page', () => {
    cy.visit(Cypress.env('test').url)
    cy.get('#user-name').type(Cypress.env('test').username)
    cy.get('#password').type(Cypress.env('test').password)
    cy.get('#login-button').click()
    tdata.items.forEach((prods)=>{
      cy.addingProductToCart(prods)
    })
    cy.get('#shopping_cart_container a').click()
    cy.url().should('include','cart')
    // cy.get('.cart_item',{timeout:4000}).should('have.length',2)
    cy.get('[class*="btn_action checkout_button"]').should('be.visible').click()
    cy.get('#first-name').type('Shahidh')
    cy.get('#last-name').type('Afshar')
    cy.get('#postal-code').type(607803)
    cy.get('[type="submit"]').click()
    let sum=0;
    cy.get('.cart_list .cart_item .inventory_item_price').each(($prices)=>{
      let productprice=$prices.text()
      let splitted=productprice.split('$')
      let takeprice=splitted[1]
      let wholeprice=takeprice.trim()
      sum=Number(sum)+Number(wholeprice)
    }).then(()=>{
      cy.log(sum)
    })
    cy.get('.summary_subtotal_label').then(($sub)=>{
      let subt=$sub.text()
      let splitted=subt.split('$')
      let takeprice=splitted[1]
      let subtotal=takeprice.trim()
      expect(sum).to.eq(Number(subtotal))
    })
  })
})
