describe('New Test', () => {
  beforeEach(() => {
    cy.setCookie('id', '5df82742f4a97922cc06b468')
    cy.visit('/NewTest')
      })
  describe('Add new test', () => {
    describe('With valid attributes', () => {
      it('allows information to be submitted', () => {
        //  Fill out web form
        cy.get('#app1 > div > div > div > form > div:nth-child(1) > input').type('Daniel')
        cy.get('#app1 > div > div > div > form > div:nth-child(2) > input').clear().type('45')
        cy.get('#app1 > div > div > div > form > div:nth-child(3) > input').type('Test3')
        cy.get('#app1 > div > div > div > form > p > button').click()
        cy.wait(100)
        cy.get('tbody')
          .find('tr')
          .should('have.length', 3)
        cy.url().should('include', '/TestContent')
      })
    })
  })
})
