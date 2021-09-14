/// <reference types="Cypress" />


describe('My second test suite', function()
{

    it('My second test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
        
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const text = $el.find('h4.product-name').text()
            if(text.includes('Cashews'))
            {
                $el.find('button').trigger("click")
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(1000)
        cy.contains('Place Order').click()
        
        })
    })
