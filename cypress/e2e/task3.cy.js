describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ticketnew.com/movies')
    cy.get('[class="AnimatedSearchBar_animInput__iuqxe"]').type('Che')
    cy.get('.MobileMovieCitySelector_searchedArea__6TJSO').each(($Cities) => {
      if ($Cities.text()==('Chennai')) {
        cy.wrap($Cities).click()
      }
    })
    cy.contains('.H5RunningMovieV2_movieName__vbyu_', 'Amaran').click()
    cy.get('.LanguageSelectionDialog_langSelectionContainer__jZY7u').contains('Tamil').click()
    cy.get('.Button_btn___t8GZ.Button_is-primary__Z7vVN.Button_is-large__GjSIq.LanguageSelectionDialog_applyBtn__2frJM').click()    
    cy.get('div[aria-label="Wednesday20"]').click()
  })
})