/// <reference types="Cypress" />


describe('My third test suite', function()
{

    it('My third test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //Checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
        //Static dropdown
        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')
        
        //Dynamic dropdown
        cy.get('input#autocomplete').type('ind')
        cy.get('.ui-menu-item > div').each(($el, index, $list) => {
            if($el.text() === 'India'){
                $el.trigger('click')
            }
        })
        cy.get('input#autocomplete').should('have.value', 'India')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })
})
