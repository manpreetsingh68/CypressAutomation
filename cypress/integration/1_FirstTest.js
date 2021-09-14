/// <reference types="Cypress" />


describe('My first test suite', function()
{

    it('My first test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const text = $el.find('h4.product-name').text()
            if(text.includes('Cashews'))
            {
                $el.find('button').click()
            }
        })

        cy.get('.brand.greenLogo').should('have.text', 'GREENKART')
        cy.get('.brand.greenLogo').then(function(logo){
            cy.log(logo.text())
        })
        //const logo = cy.get('.brand.greenLogo')
        //cy.log(logo.text())
    })
})