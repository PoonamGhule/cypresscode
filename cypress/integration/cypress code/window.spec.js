// const { it } = require("mocha")


describe('window command in cypress', function () {
    it('window uri property', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.window().should(function (win) {
            expect(win.location.host).to.eq("www.webdriveruniversity.com")
            expect(win.location.pathname).to.eq("/Contact-Us/contactus.html")
            expect(win.location.origin).to.eq("http://www.webdriveruniversity.com")
            expect(win.location.hash).to.eq("")
        })
        // cy.location('host').should('eq','www.webdriveruniversity.com')
        //    cy.location('pathname').should('eq','/Contact-Us/contactus.html')
        //    cy.location('origin').should('eq','http://www.webdriveruniversity.com')
        //    cy.location('hash').should('eq','')
    })
    it('window reload with cypress', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.window().should(function (win) {
            win.location.reload()
        })
    })
    it.only('reload with cypress', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('p[class]').eq(2).click()
        cy.window().should(function (win) {
            win.history.go(1)
            win.history.go(-1)
            win.history.back()
            win.history.forward()
        })
        // cy.go(1)
        // cy.go(-1)
        // cy.back()
        // cy.forward()
    })
})