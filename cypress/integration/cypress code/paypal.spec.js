
///<reference types = "cypress"/>
describe('validate the API', function () {
    it('validate the GET api', function () {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (res) {
            expect(res.status).to.eq(200)
        })
    })
    it('validate the POST api', function () {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (res) {
            expect(res.status).to.eq(201)
        })

    })
    it('validate the PUT api', function () {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (res) {
            expect(res.status).to.eq(200)
        })

    })
    it.only('validate the DELETE api', function () {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (res) {
            expect(res.status).to.eq(204)
        })

    })

})
// cy.request({
//     method: 'POST',
//     url: 'https://reqres.in/api/users',
//     body: {
//         "name": "morpheus",
//         "job": "leader"
//     }

// }).then(function (res) {
//     //cy.log(res.status)
//     expect(res.status).to.eq(201)
// })



































//clientid
//ATqH7ORv_3zVaWiIGBd7Xy1J7dFUBfH0xoJkgqQ9KxBBwz6TrjuV9RVybtF0sYmh6UQJKSPybVkYPiCn
//secret code
//EPtMUxxZRBqkdOnsQvmd153FjnADtEZTV8aReDRvTUWYqD0jCsCBecL0T-KlzOy7njvLJJWomdNgPNmP

//token: A21AAKRXQXWg3SDCboUuTDIIB6XRILiDXVNiatKUoIC6x5iP4JFDHQUy-uarUnvitkZD7DdL63247-MAorfHrpiuqNumH6GXA