describe('This is a test to validate veneno engine details', () => {

    it('Navigate to the URL', () => {
        cy.visit('https://buggy.justtestit.org/')
        cy.wait(3000)
        cy.viewport(1024, 768)
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
    
    it('Navigate to the Lambhorigini cars section', () => {
        cy.get(':nth-child(1) > .card').click()
    })
    it('Verify if text is the official name of Lambhorgini', () => {
        cy.get('strong').should('have.text', 'Automobili Lamborghini S.p.A.')
    })
    it('Scroll to the bottom of the page and click on Veneno', () => {
        cy.wait(3000)
        cy.scrollTo(0, 1500)
        cy.get(':nth-child(5) > :nth-child(1) > a > .img-thumbnail').click()
        cy.scrollTo(0, 300)
        cy.get('h3').should('have.text', 'Veneno')
    })
    it('Assert if Engine size is 6.5l', () => {
        cy.get('.card-block > ul > :nth-child(1)').should('have.text', 'Engine: 6.5l')
    })
})