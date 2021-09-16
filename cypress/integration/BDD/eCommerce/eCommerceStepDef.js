import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CheckoutPage from '../../../support/pageObjects/CheckoutPage'
import HomePage from '../../../support/pageObjects/HomePage'
import ProductPage from '../../../support/pageObjects/ProductPage'

const homePage = new HomePage()
const productPage = new ProductPage()
const checkoutPage = new CheckoutPage()

Given('User is on ecommerce website homepage', () => {
    cy.visit(Cypress.env('baseURL') + '/angularpractice/')
})

When('User click on Shop tab from Menu bar', () => {
    homePage.getShop().click()
})

And('User add few products in the Cart', function() {
    this.data.productName.forEach(element => {
        cy.selectProduct(element)
    })
    productPage.getCheckoutBtn().click()
})

And('User select the country and click on Checkout', () => {
    checkoutPage.getCheckoutBtn().click()
    checkoutPage.getSearchShippingCountry().type('India')
    checkoutPage.getShippingCountry().click()
    checkoutPage.getCheckTerms().click({force: true})
    checkoutPage.getPurchaseBtn().click()
})

Then('User should see Success message', () => {
    checkoutPage.getSuccessMessage().should('include.text', 'Success')
})

When('User enter the details in form', dataTable => {
    dataTable.hashes().forEach(row => {
        homePage.getName().type(row.name)
        homePage.getEmail().type(row.email)
        homePage.getGender().select(row.gender)
    })
})

Then('Do the form field validations', () => {
    homePage.getName().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneurRadio().should('be.disabled')
    homePage.getShop().click()
})






