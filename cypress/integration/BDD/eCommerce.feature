Feature: End to End validation of ECommerce site

    To validate ECommerce site end to end to make sure that it is working as designed

@Regression
Scenario: ECommerce product ordering validation
Given User is on ecommerce website homepage
When User click on Shop tab from Menu bar
And User add few products in the Cart
And User select the country and click on Checkout
Then User should see Success message

@Smoke
Scenario: ECommerce form fill validation
Given User is on ecommerce website homepage
When User enter the details in form
|name   |email                   |gender  |
|Mary   |automation@cypress.com  |Female  |
Then Do the form field validations

