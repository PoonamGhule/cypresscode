///<reference types = "cypress"/>
describe('verify  GET POST PUT DELETE api ', function () {
    let accesstoken = `8e9d1ea48fcde47f4b642adda3aaf48744925a106b3bcf992e11ad15286ae677`
    let id;
    it('verify the go rest - GET API', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer ${accesstoken}`
            }

        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body.length).to.eq(10)
            expect(response.duration).to.be.lessThan(500)

            response.body.forEach(function (element) {
                expect(element).to.have.keys(['id', 'name', 'email', 'status', 'gender'])
            })
            response.body.forEach(function (element) {
                //cy.log(element.id)
                expect(element.id).not.to.null
                expect(element.name).not.to.null
                expect(element.status).not.to.null
                expect(element.email).not.to.null
                expect(element.gender).not.to.null
            })
        })
    })
    it('verify POST Api', function () {
       
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer ${accesstoken}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali.ramakrishna${Math.floor(Math.random() * 100000)}@15ce.com`,
                status: "active"
            }
        }).then(function ({ status, duration, body }) {
            //cy.log(res)
            cy.log(body.id)
            id = body.id
            expect(status).to.eq(201)
            expect(duration).to.lessThan(501)
            expect(body).to.have.all.keys("id", "email", "gender", "status", "name")
        })
    })
    it('verify PUT Api', function () {
        cy.log(id)
        cy.request({
            method: "PUT",
            url: `https://gorest.co.in/public/v2/users/${id}`,
            headers: {
                Authorization: `Bearer ${accesstoken}`
            },
            body: {
                name: "Allasani Peddana",
                email: "allasani.peddangfgffgxcvcgfa2266@15ce.com",
                status: "active"
            }
        }).then(function (res) {
            expect(res.status).to.eq(200)
        })
    })
    it('verify DELETE Api', function () {
        cy.log(id)
        // cy.request({
        //     method: "DELETE",
        //     url: "https://gorest.co.in/public/v2/users/7800",
        //     headers: {
        //         Authorization: `Bearer ${accesstoken}`
        //     }

            cy.request({
                method: "DELETE",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: `Bearer ${accesstoken}`
                }

        }).then(function (res){
            expect(res.status).to.eq(204)

        })
    })
})






//curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPATCH "https://gorest.co.in/public/v2/users/81" -d '{"name":"Allasani Peddana", "email":"allasani.peddana@15ce.com", "status":"active"}'

//curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPOST "https://gorest.co.in/public/v2/graphql" -d '{"query":"mutation{deleteUser(input: {id: 81}){user {id name email gender status}}}"}'