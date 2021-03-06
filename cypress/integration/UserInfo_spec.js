describe('User Information page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.setCookie('id', '5df82742f4a97922cc06b468')
    cy.request('PUT', 'https://mci-staging-api.herokuapp.com/user/5df82742f4a97922cc06b468', { password: 'abc123' })
      .then((response) => {
        // response.body is automatically serialized into JSON
        // eslint-disable-next-line no-undef
        expect(response.body).to.have.property('password', 'abc123') // true
      })
    cy.get('.navbar-nav')
      .eq(1)
      .find('.nav-item')
      .eq(0)
      .click()
    cy.get('#__BVID__23 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
  })
  describe('edit information', () => {
    it('show the edit page and change info', () => {
      cy.get('#app > div > div > div > div > div > div:nth-child(2) > div > div:nth-child(1) > a').click()
      cy.url().should('include', '/editInfo')
      cy.get('#__BVID__47').clear().type('da@wit')
      cy.get('#__BVID__47').clear().type('da@wit')
      cy.get('#app > div > div > div > div > div > div > div:nth-child(16) > div:nth-child(1) > button').click()
      cy.get('#app > div > div > div > div > div > div.bg-light.col > div:nth-child(8) > div:nth-child(2)').contains('da@wit')
    })
  })
  describe('change password', () => {
    it('give invalid id', () => {
      cy.get('#app > div > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > a').click()
      cy.url().should('include', '/changePsd')
      cy.contains('The password must be at least 6 digital')
      cy.contains('The new password must be different from the original one')
      cy.contains('The password must be the same as the former one')
    })
    it('change the password', () => {
      cy.get('#app > div > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > a').click()
      cy.url().should('include', '/changePsd')
      cy.get('#__BVID__44').type('abc123')
      cy.get('#__BVID__45').type('123abc')
      cy.get('#__BVID__46').type('123abc')
      cy.get('#app > div > div > div > div > div > div > div:nth-child(11) > div:nth-child(1) > button').click()
      cy.url().should('include', '/login')
    })
  })
})
