/// <reference types="Cypress" />


describe('My fourth test suite', function()
{

    it('My fourth test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //Alerts
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Handle new window popup 
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
        cy.url().should('include','rahulshettyacademy')
        cy.go('forward')
        cy.url().should('include','rahulshettyacademy')

    })
})
