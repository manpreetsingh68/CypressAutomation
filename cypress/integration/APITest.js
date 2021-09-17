/// <reference types="Cypress" />

describe('API testing scenario', function(){
    it('API testing', function(){
        
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',{
            "name" : "Learn Appium Automation with Java",
            "isbn" : "testisbn4",
            "aisle" : "126812321",
            "author" : "Harry Potter" 
        }).then(function(response){
            expect(response.body).to.have.property('Msg', 'successfully added')
            expect(response.status).to.equal(200)
        })

    })
})


