///<reference types = "cypress"/>

describe('verify login(),confirm(),prompt()',function(){
    this.beforeEach(function(){
cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it('verify the alert()',function(){
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',function(str){
            expect(str).to.eq('I am a JS Alert')
            return true
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    it('verify confirm()ok',function(){
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',function(str){
            expect(str).to.eq('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    it('verify confirm()cancel',function(){
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',function(str){
            expect(str).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    })
    it('verify prompt()',function(){
        cy.contains('Click for JS Prompt').click()
        cy.window().then(function(win){
            cy.stub(win,'prompt').returned('hello')
        })
        cy.get('#result').should('have.text','You entered: hello')
    })
    it.only('verify prompt()',function(){
        cy.contains('Click for JS Prompt').click()
        cy.window().then(function(win){
            cy.stub(win,'prompt').returned('')
        })
        cy.get('#result').should('have.text','You entered: null')
    })
})

