const apiURL = 'https://mci-staging-api.herokuapp.com/test/'

describe('New Test Page', () => {
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
    cy.get('#__BVID__12 > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
  })

  describe('Add new test', () => {
    describe('With valid attributes', () => {
      it('allows information to be submitted', () => {
        //  Fill out web form
        cy.get('#app1 > div > div > div > form > div:nth-child(1) > input').type('Daniel')
        cy.get('#app1 > div > div > div > form > div:nth-child(2) > input').clear().type('45')
        cy.get('#app1 > div > div > div > form > div:nth-child(3) > input').type('Test9')
        cy.get('#app1 > div > div > div > form > p > button').click()
        cy.wait(100)
        // cy.get('tbody')
        //   .find('tr')
        //   .should('have.length', 6)
        cy.url().should('include', '/TestContent')
      })
    })
  })
})
