const apiURL = 'https://mci-staging-api.herokuapp.com/test/'

describe('Give Grade page', () => {
  beforeEach(() => {
    cy.setCookie('id', '5df82742f4a97922cc06b468')
    cy.request(apiURL)
      .its('body')
      .then(test => {
        test.forEach(element => {
          cy.request('DELETE', `${apiURL}${element._id}`)
        })
      })
    cy.fixture('test').then(test => {
      let [n1, n2, n3, n4, n5] = test
      let tests = [n1, n2, n3, n4, n5]
      tests.forEach(test => {
        cy.request('POST', apiURL, test)
      })
    })
    cy.visit('/')
    // Click Donate navbar link
    cy.get('.navbar-nav')
      .eq(0)
      .find('.nav-item')
      .eq(1)
      .click()
    cy.get('#__BVID__12 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
  })

  describe('giev grades to the test', () => {
    it('reduces the number of tests by 1', () => {
      cy.get('tbody')
        .find('tr')
        .should('have.length', 5)
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
