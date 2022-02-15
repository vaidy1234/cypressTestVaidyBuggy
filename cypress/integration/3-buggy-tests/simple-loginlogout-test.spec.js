describe('This is a simple login and logout test', () => {

    it('Navigate to the URL', () => {
        cy.visit('https://buggy.justtestit.org/')
    })

    it('Register as a new user', () => {
        cy.wait(2000)
        cy.get('.btn-success-outline').click()
    })
    
    it('Fill out the form as a new user and login', () => {
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
        const testpassword = `Testpassword#${idpassword}`
        cy.get('#username').type(testusername);
        cy.get('#firstName').type(testfirstname)
        cy.get('#lastName').type(testlastname)
        cy.get('#password').type(testpassword)
        cy.get('#confirmPassword').type(testpassword)
        cy.get('.btn-default').click()
        cy.scrollTo(1500, 0)
        cy.get('.navbar-brand').click()
        cy.wait(2000)
        cy.get('.input-sm').type(testusername)
        cy.get('[name="password"]').type(testpassword)
        cy.get('.btn-success').click()
        cy.get(':nth-child(1) > .nav-link').should('have.text', 'Hi, testfirstname0')
    })

    it('Logout of the application and verify if login text is available again', () => {
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.btn-success').should('have.text', 'Login')
    })
})