///<reference types = "cypress"/>
describe('verify the iframe in cypress ', function () {
    it.only('verify iframe using jquary', function () {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function ($el) {
            // cy.log($el.contents().find('body'))
            let body = $el.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').should('have.text', 'Home')
        })
    })
    it.skip('verify iframe using javascript', function () {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function (el) {
            let body = el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').should('have.text', 'Home')

        })
    })
    it.skip('verify iframe using javascript', function () {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        getelement('frame').find('a[href="index.html"]').should('have.text', 'Home')
    })
    const getelement = function (id) {
        return cy.get(`#${id}`).its('0.contentDocument.body').then(cy.wrap)
    }
})











