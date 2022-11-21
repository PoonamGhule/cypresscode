///<reference types = "cypress"/>

describe('verify the local storage for the app',function(){
    this.beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/')
    })
    it('local storage using window',function(){
        cy.window().should(function(win){
           expect( win.localStorage.length).to.eq(0)
            win.localStorage.setItem('id',1)
            expect( win.localStorage.length).to.eq(1)
        })
    })
    it('clear local storage using cypress',function(){
        cy.clearLocalStorage()
        cy.window().should(function(win){
            expect(win.localStorage.length).to.eq(0)
        })
    })
    it('verify the title of the page',function(){
        cy.document().should(function(doc){
            expect(doc.title).to.eq('WebDriverUniversity.com')
        })
    })
    it('verify the title of the page using cypress',function(){
        cy.title().should('eq','WebDriverUniversity.com')
    })  
    it.only('verify the title of the page using cypress',function(){
        cy.title().should(function(tit){
            expect(tit).to.eq('WebDriverUniversity.com')
        })
    })
    
})
