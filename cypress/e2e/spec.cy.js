describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://amazon.in')
    cy.get('.ac-input-container').type('samsung');
    cy.get('#nav-search-submit-button').type('enter');
    cy.get('[data-asin="B0BT9CXXXX"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium').type('enter')
  })
})