///<reference types = "cypress"/>
describe('describe the functionality for checkbox', function () {
    before(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify the  one check box with click() function', function () {

        cy.get('input[value="option-3"]').click().should('not.be.checked')
        cy.get('input[value="option-3"]').click().should('be.checked')

    })
    it.only('verify the  one check box with check() function', function () {

        cy.get('input[value="option-2"]').check().should('be.checked')
        cy.get('input[value="option-2"]').uncheck().should('not.be.checked')

    })
    it('verify multiple checkbox with check and uncheck function', function () {
        cy.get('input[type="checkbox"]').each(function (el) {
            cy.log(el)
            cy.wrap(el).as('checkbox')
            cy.get('@checkbox').check().should('be.checked')
            cy.get('@checkbox').uncheck().should('not.be.checked')
        })
    })
    it('verify the radio button with click() function', function () {

        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')

    })
    it('verify the radiobutton with check()function', function () {
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')

    })
    it('verify all radio  with buttoncheck uncheck fun', function () {
        cy.get('input[name="color"]').each(function (el) {
            cy.wrap(el).as('radiobutton')
            cy.get('@radiobutton').check().should('be.checked')
        })
    })
    it('check whether the particular element is disabled', function () {
        cy.get('input[value="cabbage"]').should('be.disabled')
    })
    it('check whether the particular element is enabled', function () {
        cy.get('input[value="lettuce"]').should('be.enabled')
    })
})
