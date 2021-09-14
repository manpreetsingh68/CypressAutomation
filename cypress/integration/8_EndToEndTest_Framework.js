/// <reference types="Cypress" />
import CheckoutPage from '../support/pageObjects/CheckoutPage'
import HomePage from '../support/pageObjects/HomePage'
import ProductPage from '../support/pageObjects/ProductPage'

describe('My End to End test suite', function()
{
    //Before hook runs once before all test cases (it blocks)
    before(function(){
        cy.fixture('testdata').then(function(data){
            this.data = data
        })
    })

    it('My End to End test case', function()
    {
        Cypress.config('defaultCommandTimeout', 8000)
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutPage = new CheckoutPage()
        cy.visit(Cypress.env('baseURL') + '/angularpractice/')
        homePage.getName().type(this.data.name)
        homePage.getEmail().type(this.data.email)
        homePage.getGender().select(this.data.gender)

        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getName().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneurRadio().should('be.disabled')

        homePage.getShop().click()
        this.data.productName.forEach(element => {
            cy.selectProduct(element)
        });

        productPage.getCheckoutBtn().click()
        checkoutPage.getCheckoutBtn().click()
        checkoutPage.getSearchShippingCountry().type('India')
        
        checkoutPage.getShippingCountry().click()
        checkoutPage.getCheckTerms().click({force: true})
        checkoutPage.getPurchaseBtn().click()

        checkoutPage.getSuccessMessage().should('include.text', 'Success')

    })
})
