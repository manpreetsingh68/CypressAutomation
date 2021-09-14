/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My sixth test suite', function()
{

    it('My sixth test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Handling frames
        cy.frameLoaded('#courses-iframe')
        
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

    })
})
