/// <reference types="Cypress" />

describe('Intercept API scenario for Request', function(){
    it('Intercept API test for Request', function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (request) =>{
                request.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
                request.continue((response) =>{
                    expect(response.statusCode).to.equal(200)
            })
        }).as('dummyRequest')

        cy.get('.btn.btn-primary').click()
        cy.wait('@dummyRequest')

    })
})


