

describe('TS_01 verify the login functionality',function(){

    it('Tc_01 check with valid credantial',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('img[src="/web/images/orangehrm-logo.png?1660914792648"').should('be.visible')
    })
    it('Tc_02 check with invalid credantial',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admwerin')
        cy.get('input[name="password"]').type('admin1reww23')
        cy.get('button[type="submit"]').click()
        cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text','Invalid credentials')   
    })
})

