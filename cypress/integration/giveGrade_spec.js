describe('Give grade page', () => {
  beforeEach(() => {
    cy.setCookie('id', '5df82742f4a97922cc06b468')
    cy.visit('/TestHistory')
  })
  describe('giev grades to the test', () => {
    it('reduces the number of novels by 1', () => {
      cy.get('tbody')
        .find('tr')
        .should('have.length', 4)
      // Click trash/delete link of 3rd donation in list
      cy.get('tbody')
        .find('tr')
        .eq(2)
        .find('td')
        .eq(4)
        .find('a')
        .click()
      cy.get('#app1 > div > div > div:nth-child(2) > input').clear().type('60')
      cy.get('#app1 > div > div > div:nth-child(3) > button').click()
      cy.url().should('include', '/TestHistory')
    })

  })
})
