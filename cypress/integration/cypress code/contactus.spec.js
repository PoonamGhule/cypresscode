

///<reference types = "cypress"/>
describe('validate the contactus form',function(){ 

    it('validate the succesfull submission of form',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type("poonam")
        cy.get('input[name="last_name"]').type("ghule")
        cy.get('input[name="email"]').type("ghule@gmail.com")
        cy.get('textarea[name="message"]').type("learning js")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
    it('validate the form of incorrect email id',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type("poonam")
        cy.get('input[name="last_name"]').type("ghule")
        cy.get('input[name="email"]').type("ghule@gmailcom")
        cy.get('textarea[name="message"]').type("learning js")
        cy.get('input[type="submit"]').click()
        cy.get(`body`).should('contain','Error: Invalid email address')

    })
    it('validate the form with click on reset button',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type("poonam")
        cy.get('input[name="last_name"]').type("ghule")
        cy.get('input[name="email"]').type("ghule@gmail.com")
        cy.get('textarea[name="message"]').type("learning js")
        cy.get('input[type="reset"]').click()

        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')
    
    })
    it('validate heading of contact us',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
        cy.get('h2[name="contactme"]').should('be.text','CONTACT US')
    })

})