beforeEach(function(){
    cy.fixture('testdata').then(function(data){
        this.data = data
    })
})