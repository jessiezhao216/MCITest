const apiURL = 'https://mci-staging-api.herokuapp.com/test/'

describe('Test History page', () => {
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

describe('For a confirmed delete operation', () => {
  it('reduces the number of tests by 1', () => {
    cy.get('tbody')
      .find('tr')
      .should('have.length', 5)
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
        .should('have.length', 4)
    })
  })
  describe('For a cancelled delete operation', () => {
    it('leaves the list unchanged', () => {
      cy.get('tbody')
        .find('tr')
        .should('have.length', 5)
      // Click trash/delete link of 3rd donation in list
      cy.get('tbody')
        .find('tr')
        .eq(3)
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
        .should('have.length', 5)
    })
  })
})
