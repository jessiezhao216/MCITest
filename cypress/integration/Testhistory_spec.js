describe('Test History page', () => {
  beforeEach(() => {
    cy.setCookie('id', '5df82742f4a97922cc06b468')
    cy.visit('/TestHistory')
  })

describe('For a confirmed delete operation', () => {
  it('reduces the number of novels by 1', () => {
    cy.get('tbody')
      .find('tr')
      .should('have.length', 4)
      // Click trash/delete link of 3rd donation in list
      cy.get('tbody')
        .find('tr')
        .eq(3)
        .find('td')
        .eq(5)
        .find('a')
        .click()
      cy.screenshot('delete-confirm')
      cy.get('button')
        .contains('Delete')
        .click()
      cy.get('tbody')
        .find('tr')
        .should('have.length', 3)
    })
  })
  describe('For a cancelled delete operation', () => {
    it('leaves the list unchanged', () => {
      cy.get('tbody')
        .find('tr')
        .should('have.length', 3)
      // Click trash/delete link of 3rd donation in list
      cy.get('tbody')
        .find('tr')
        .eq(2)
        .find('td')
        .eq(5)
        .find('a')
        .click()
      // Click cancel button
      cy.get('button')
        .contains('Cancel')
        .click()
      cy.get('tbody')
        .find('tr')
        .should('have.length', 3)
    })
  })
})
