import obji from '../../fixtures/contactus.json'
import user from '../../fixtures/multipleuser.json'

///<reference types = "cypress"/>
describe('verify the contact us form', function () {
    let objG;
    before(() => {
        cy.fixture('contactus').then((data) => {
            objG = data
        })
    })
    let obj = {
        firstname: "poonam",
        lastname: "ghule",
        email: "punamtambe27@gmail.com",
        comments: "i am learning js"
    }
    it('verify contactus form with object', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("input[name='first_name']").type(obj.firstname)
        cy.get("input[name='last_name']").type(obj.lastname)
        cy.get("input[name='email']").type(obj.email)
        cy.get("textarea[name='message']").type(obj.comments)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })
    it('verify the contactus via fixture for particular testcase', function () {
        cy.fixture('contactus').then(function (obj) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get("input[name='first_name']").type(obj.firstname)
            cy.get("input[name='last_name']").type(obj.lastname)
            cy.get("input[name='email']").type(obj.email)
            cy.get("textarea[name='message']").type(obj.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', "Thank You for your Message!")
        })
    })
    it('verify contactus form with object', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("input[name='first_name']").type(objG.firstname)
        cy.get("input[name='last_name']").type(objG.lastname)
        cy.get("input[name='email']").type(objG.email)
        cy.get("textarea[name='message']").type(objG.comments)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })
    it('verify the contactus via fixture from import', function () {
        // third way
        //cy.log(objimport)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obji.firstname)
        cy.get('input[name="last_name"]').type(obji.lastname)
        cy.get('input[name="email"]').type(obji.email)
        cy.get('textarea[name="message"]').type(obji.comments)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it('verify the contactus via fixture from import', function () {
        // cy.log(users)
        user.forEach(function (el) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstname)
            cy.get('input[name="last_name"]').type(el.lastname)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
    user.forEach(function (el, index) {
        it(`verify the contactus via fixture from import ${index + 1}`, function () {
            // cy.log(users)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstname)
            cy.get('input[name="last_name"]').type(el.lastname)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
})
