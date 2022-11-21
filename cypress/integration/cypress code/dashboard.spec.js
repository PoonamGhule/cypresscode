describe('verify login functionality',function(){
beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.login('Admin','admin123')
})
it('verify logo visible on dashboard',function(){

    cy.get('img[alt="client brand banner"]').should('be.visible')
})
it('TC_02 verify the default tab to be PIM',function(){
    cy.url().should('contain','pim')
    cy.get("h6[class]").should('have.text',"PIM")
})
    
})