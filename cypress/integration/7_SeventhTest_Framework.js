/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My Seventh_framework test suite', function()
{
    //Before hook runs once before all test cases (it blocks)
    before(function(){
        cy.fixture('testdata').then(function(data){
            this.data = data
        })
    })

    it('My Seventh_framework test case', function()
    {
        cy.visit(Cypress.env('baseURL') + '/angularpractice/')
        cy.get('input[name="name"]').eq(0).type(this.data.name)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)

        cy.get('input[name="name"]').eq(1).should('have.value', this.data.name)
        cy.get('input[name="name"]').eq(0).should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')

        cy.contains('Shop').click()
        this.data.productName.forEach(element => {
            cy.selectProduct(element)
        });

    })
})
