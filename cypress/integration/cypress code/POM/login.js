export class Login {

    elements = {
        username: "#user-name",
        password: "#password",
        loginbutton: "#login-button",
        invalidbutton: ".error-button",
        logo: '.login_logo'

    }

    navigation() {

        cy.visit('https://www.saucedemo.com/')
    }
    validlogin(username, password) {
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.loginbutton).click()
        cy.url().should("contain", 'inventory')
    }
    invalidlogin(username, password) {
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.loginbutton).click()
        cy.get(this.elements.invalidbutton).should('be.visible')
    }

    validatelogo() {
        cy.get(this.elements.logo).should('be.visible')
    }

}
