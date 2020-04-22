/// <reference types="Cypress" />

import loginPageObject from "./pageObject/loginPageObject"


describe('Test Suite', function () {

    it("valid login test", function(){

        const lp=new loginPageObject()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')


    })


})