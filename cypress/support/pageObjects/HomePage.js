class HomePage{

    getName(){
        return cy.get('input[name="name"]').eq(0)
    }
    getEmail(){
        return cy.get('input[name="email"]')
    }
    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }
    getTwoWayDataBinding(){
        return cy.get('input[name="name"]').eq(1)
    }
    getSubmit(){
        return cy.get('input[type="submit"]')
    }
    getEntrepreneurRadio(){
        return cy.get('#inlineRadio3')
    }
    getShop(){
        return cy.contains('Shop')
    }
}

export default HomePage