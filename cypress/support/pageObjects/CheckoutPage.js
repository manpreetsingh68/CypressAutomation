class CheckoutPage{

    getCheckoutBtn(){
        return cy.contains('Checkout')
    }
    getSearchShippingCountry(){
        return cy.get('#country')
    }
    getShippingCountry(){
        return cy.contains('India')
    }
    getCheckTerms(){
        return cy.get('#checkbox2')
    }
    getPurchaseBtn(){
        return cy.contains('Purchase')
    }
    getSuccessMessage(){
        return cy.contains('Success')
    }
    
}

export default CheckoutPage