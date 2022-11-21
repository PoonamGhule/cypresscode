///<reference types = "cypress"/>
describe('verify POST PUT DELETE', function () {
    let accessToken = `8e9d1ea48fcde47f4b642adda3aaf48744925a106b3bcf992e11ad15286ae677`
    it('POST,PUT,DELETE', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `c.ashdddna${Math.floor(Math.random() * 100000)}@gmail.com`,
                status: "active"
            }
        }).then(function (res) {
            expect(res.status).to.eq(201)
            return res.body.id
        }).then(function (id) {
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                body: {
                    name: "Tenali Ramakrishna",
                    gender: "male",
                    email: `c.ashdddna${Math.floor(Math.random() * 100000)}@gmail.com`,
                    status: "active"
                }
            }).then(function (res) {
                expect(res.status).to.eq(200)
                return res.body.id
            }).then(function(id){
                cy.request({
                    method: "DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }

                }).then(function (res) {
                    expect(res.status).to.eq(204)
                })

            })

        })
    })
})

//https://gorest.co.in/public/v2/users