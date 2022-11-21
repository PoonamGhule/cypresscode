///<reference types = "cypress"/>

describe("verfy the date section in cypress", function () {
    it('verify the date selection in cypress', function () {

        //practice
        // let date = new Date()
        // let year = date.getFullYear()
        // let month = date.getMonth()
        // let daydate = date.getDate()
        // cy.log(daydate)
        // cy.log(month)
        // cy.log(year)

        //practice 2
        let date1 = new Date()
        date1.setDate(date1.getDate() + 200)

        let year = date1.getFullYear()
        let month = date1.toLocaleString("default", { month: "short" })
        let daydate = date1.getDate()

        cy.log(year)
        cy.log(month)
        cy.log(daydate)

        cy.visit('http://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function SelectMonthAndYear() {
            cy.get('.datepicker-switch').first().then(function ($el) {
                //cy.log($el.text())
                if (!$el.text().includes(year)) {
                    cy.get('.next').first().click()
                    SelectMonthAndYear()
                }
            })

            cy.get('.datepicker-switch').first().then(function ($el) {
                //cy.log($el.text())
                if (!$el.text().includes(month)) {
                    cy.get('.next').first().click()
                    SelectMonthAndYear()
                }
            })
        }
        SelectMonthAndYear()

        function selectDate() {
            cy.contains(daydate).click()
        }
        selectDate()


    })
})