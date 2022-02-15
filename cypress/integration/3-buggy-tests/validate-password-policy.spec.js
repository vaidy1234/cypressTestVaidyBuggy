describe('This is a test to validate uppercase password policy', () => {

    it('Navigate to the URL', () => {
        cy.visit('https://buggy.justtestit.org/')
    })

    it('Register as a new user', () => {
        cy.wait(2000)
        cy.get('.btn-success-outline').click()
    })
    it('Fill out the form as a new user', () => {
        const username = () => Cypress._.random(0, 1e6)
        const firstname = () => Cypress._.random('^[A-Za-z]+$')
        const lastname = () => Cypress._.random('^[A-Za-z]+$')
        const password = () => Cypress._.random('^[A-Za-z]+$')
        const idusername = username()
        const idfirstname = firstname()
        const idlastname = lastname()
        const idpassword = password()
        const testusername = `testname${idusername}`
        const testfirstname = `testfirstname${idfirstname}`
        const testlastname = `testlastname${idlastname}`
        const testpassword = `testpassword${idpassword}`
        cy.get('#username').type(testusername);
        cy.get('#firstName').type(testfirstname)
        cy.get('#lastName').type(testlastname)
        cy.get('#password').type(testpassword)
        cy.get('#confirmPassword').type(testpassword)
        cy.get('.btn-default').click()
    })
    it('Validate if uppercase exception is generated', () => {
        cy.get('.result').should('contain', 'Password must have uppercase characters')
    })
})