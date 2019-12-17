describe('The Login Page', function () {
  it('Login and turn to home page', function () {
    // programmatically log us in without needing the UI
    cy.visit('/login')
    cy.setCookie('id', '5df82742f4a97922cc06b468')
    cy.contains(' Username:')
    cy.contains(' Password:')
    cy.get('#__BVID__34').type('PPP')
    cy.get('#__BVID__35').type('abc123')
    cy.get('#app > div > div > div > p > div > div:nth-child(6) > button').click()
    cy.url().should('include', '/')
    cy.getCookie('id').should('have.property', 'value', '5df82742f4a97922cc06b468')
  })

  it('Register and turn to register page', function () {
    cy.visit('/login')
    cy.get('#app > div > div > div > p > div > div:nth-child(6) > a').click()
    cy.url().should('include', '/register')
    cy.getCookies().should('be.empty')
  })
})
