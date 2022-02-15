describe('This is a test to add a comment and verify if it has been added successfully', () => {

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
    })

    it('Add a comment as a user and vote', () => {
        cy.get(':nth-child(2) > .card').click()
        cy.scrollTo(0, 1500)
        cy.get('#comment').type('This is a sample comment')
        cy.get('.btn').click()
        cy.wait(2000)
    })

    it('Verify if comment has been added', () => {
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', 'This is a sample comment')

    })
})