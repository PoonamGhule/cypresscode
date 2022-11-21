



describe('transverse method in js', function () {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    it('To get children of DOM elements, use the .children() command.', function () {
        cy.get('div[class="traversal-button-states"]').children().should('have.length', 4)
    })
    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.get('div[class="traversal-button-states"]').children().first().should('have.text', 'Danger')
    })
    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.get('div[class="traversal-button-states"]').children().last().should('have.text', 'Alert')
    })
    it('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.get('div[class="traversal-button-states"]').children().eq(1).should('have.text', 'Warning')
    })
    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.get('li[id="tea"]').next().should('have.text', 'Milk')
        cy.get('li[id="tea"]').next().should('have.attr', 'id', 'milk')
    })
    it('To get the prev sibling DOM element within elements, use the .prev() command.', function () {
        cy.get('li[id="tea"]').prev().should('have.text', 'Coffee')
        cy.get('li[id="tea"]').prev().should('have.attr', 'id', 'coffee')
    })
    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.get('li[id="tea"]').siblings().should('have.length', 4)
    })
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.get('#coffee').nextUntil('#milk').should('have.length', 1)

    })
    it('To get all prev sibling DOM elements of elements, use the .prevuntil() command.', function () {
        cy.get('#sugar').prevUntil('#tea').should('have.length', 2)
    })
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.get('#sugar').prevAll().should('have.length', 4)
    })
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.get('#tea').nextAll().should('have.length', 3)
    })
    it('To get descendant DOM elements of the selector, use the .find() command.', function () {
        cy.get('.traversal-buttons').find('a').should('have.text', 'Link')
        cy.get('.traversal-buttons').find('button').should('have.text','Button')
    })
    it('To get DOM elements that match a specific selector, use the .filter() command.', function () {
        cy.get('.traversal-buttons').children().filter('input').should('have.attr','value','Input')
    })
    it.only('To remove DOM element(s) from the set of elements, use the .not() command.', function () {
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })
    // it('To remove DOM element(s) from the set of elements, use the .not() command.', function () {
        //cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    // })
    it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.get('button[class="btn btn-primary active"]').parent().should('have.class','btn-group btn-group-toggle')
    })
    it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.get('div[class="btn-group btn-group-toggle"]').parents().should('have.class','col-sm-12')
    })
    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.', function () {
        cy.get('.btn-outline-danger').parentsUntil('.container').should('have.length',3)
    })
    it.only('To get the closest ancestor DOM element, use the .closest() command.', function () {
        cy.get('#espresso').closest('div').should('have.class','col-sm-12')
    })


})





