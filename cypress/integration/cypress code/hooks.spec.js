///<reference types = "cypress"/>
describe('verify concept of hook in js', function () {
    before(function(){
        cy.log('i am before all')
    })
    after(function(){
        cy.log('i am after all')
    })
    beforeEach(function () {
        cy.log('i am before each testcase')
    })
    afterEach(function () {
        cy.log('i am after each testcase')
    })

    it('test case one', function () {
        cy.log('testcase one')
    })
    it('test case two', function () {
        cy.log('testcase two')
    })
})