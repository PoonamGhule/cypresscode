///<reference types = "cypress"/>

describe('validate calendor in cypress', function () {
    it('verify year month date in cypress', function () {
        // let date = new Date()
        // //cy.log(date)

        // let year = date.getFullYear()
        // let month = date.getMonth()
        // let daydate = date.getDate()
        // cy.log(year)
        // cy.log(month)
        // cy.log(daydate)

        let date2 = new Date()
        date2.setDate(date2.getDate() + 200)
        let Year = date2.getFullYear()
        let Month = date2.toLocaleString('default', { month: 'long' })
        let Daydate = date2.getDate()
        cy.log(Year)
        cy.log(Month)
        cy.log(Daydate)

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectmonthandyear() {
            cy.get('.datepicker-switch').first().then(function ($el) {
                //cy.log($el.text())
                if (!$el.text().includes(Year)) {
                    cy.get('.next').first().click({force:true})
                    selectmonthandyear()
                }
            })
            cy.get('.datepicker-switch').first().then(function ($el) {
                if (!$el.text().includes(Month)) {
                    cy.get('.next').first().click({force:true})
                    selectmonthandyear()
                }
            })
        }
        selectmonthandyear()

        function selectdate() {
            cy.contains(Daydate).click()
        }
        selectdate()
    })
})
