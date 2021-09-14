/// <reference types="Cypress" />


describe('My fifth test suite', function()
{

    it('My fifth test case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //Handle dynamic tables
        cy.get('table[name="courses"] > tbody > tr > td:nth-child(2)').each(($el, index, $list) => {
            const courseText = $el.text()
            if(courseText.includes('JMETER')){
                cy.get('table[name="courses"] > tbody > tr > td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

        //Mouse hover event
        //cy.get('.mouse-hover-content').invoke('show') //Jquery function
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')

        //To grab any property from DOM
        cy.get('#opentab').then(function(ele){
            const href = ele.prop('href') //Jquery function
            cy.log(href)
        })

    })
})
