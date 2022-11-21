///<reference types = "cypress"/>

describe('verify login functionality', function () {
    it('verify correct login', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        //cy.get('button[type="submit"]').click()
        cy.contains('button', 'Login').click()
        //cy.get('img[src="/web/images/orangehrm-logo.png?1660914792648"]').should('be.visible')
        //cy.contains('Employee Information').should('be.visible')
        //cy.get('h5[class]').should('be.visible').and('have.text','Employee Information')
        cy.get('h5[class]').then(function (el) {
            expect(el.text()).to.equal('Employee Information');
        })

    })
    it('verify the  mutiple check box with checked() by passing array parameter', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4'])
    })
    it.only('verify the select functionality via text', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')

    })
})

