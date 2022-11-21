



describe('window test command', function () {
    beforeEach(function () {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('window URI command', function () {
        cy.window().should(function (win) {
            expect(win.location.host).eq('automationpractice.com')
            expect(win.location.hash).eq('')
            expect(win.location.origin).eq('http://automationpractice.com')
            expect(win.location.pathname).eq('/index.php')

        })
    })
    it("window reload", function () {
        cy.window().should(function (win) {
            win.location.reload()
        })
    })
    it('cypress reload', function () {
        cy.reload()
    })

    it.only('window nevigation', function () {
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.window().should(function (win) {
            win.history.back()  
        })
        cy.get('a[class="blockbestsellers"]').should('be.visible')
        cy.window().should(function (win) {
            win.history.forward()  
        })
        cy.get('h2[class="title_block"]').should('be.visible')

    })
})
