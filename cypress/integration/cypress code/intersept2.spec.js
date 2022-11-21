///<reference types = "cypress"/>

describe('verify the UI for kitchen exmaple', function () {
    it('verify the UI for GET request', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain', 'laudantium enim quasi est quidem')
    })
    it('verify the UI for POST request', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            //cy.log(res)
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.keys(['postId', 'id', 'name', "email", 'body'])
            expect(request.method).to.eq('GET')
            cy.get('.network-comment').should('have.text', response.body.body)
        })
        //cy.get('.network-post-comment').should('have.text', 'POST successful!')
    })
    it('verify the UI for POST request', function () {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function ({ response, request }) {
            //cy.log(res)
            expect(response.statusCode).to.eq(201)
            expect(response.body).to.keys(['id', 'name', "email", 'body'])
            expect(request.method).to.eq('POST')
            cy.get('.network-post-comment').should('have.text', 'POST successful!')
        })
    })
    it.only('verify the UI for GET request', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        },
            {
                body: {
                    "postId": 1,
                    "MYname": "POONAM",
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "JAVASCRIPT LEARNING"
                }

            }
        ).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            cy.log(response)
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.keys(['postId', 'id', 'MYname', 'name', "email", 'body'])
            expect(request.method).to.eq('GET')
            cy.get('.network-comment').should('have.text', response.body.body)
        })

    })
    it('verify the UI for GET request', function () {
        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('PUTComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@PUTComment').then(function ({ response, request }) {
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.keys(['id', 'name', "email", 'body'])
            expect(request.method).to.eq('PUT')
        })

    })

})
