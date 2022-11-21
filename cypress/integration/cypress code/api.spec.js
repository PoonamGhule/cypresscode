///<reference types = "cypress"/>
describe('verify the kitchen api examples', function () {
    it('verify GET api', function () {

        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).then(function (res) {
            expect(res.status).to.eq(200)
        })
    })
    it('verify POST api', function () {

        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",
            body: {
                body: "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                email: "hello@cypress.io",
                id: 501,
                name: "Using POST in cy.intercept()"
            }
        }).then(function (res) {
            expect(res.status).to.eq(201)
        })
    })
    it('verify PUT api', function () {

        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1",
            body: {
                body: "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                email: "hello@cypress.io",
                id: 501,
                name: "Using POST in cy.intercept()"
            }
        }).then(function (res) {
            expect(res.status).to.eq(200)
        })
    })



})