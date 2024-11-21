describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[value="radio2"]').check().should('be.checked')
    cy.get('#dropdown-class-example').select('option1')
    cy.get('#checkBoxOption2').check()
    cy.get('#checkBoxOption3').check()
    cy.get('fieldset #autocomplete').type('UK')
    cy.get('.ui-menu-item div').each(($Countries)=>{
      if($Countries.text().includes('Kingdom')){
        cy.wrap($Countries).click()
      }
    })
    cy.get('fieldset a#opentab').invoke('removeAttr','target').click()
    cy.origin('https://www.qaclickacademy.com/',()=>{
      cy.get('#navbarSupportedContent li a[href*="blog"]').click()
    })
    
  })
})