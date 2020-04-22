/// <reference types="Cypress" />

import googlePageObject  from "./pageObject/googlePageObject";


describe ("Resource Google", () => {

    it("valid login test", function(){

        const test=new googlePageObject()
        
        test.visit()
        test.search('Lucas José Carvalho Teixeira')
        test.submit()
        cy.contains('Lucas José Carvalho Teixeira | Escavador').click({force:true})

    it('Other Page - resulted', function() {

        test.otherPage().contains('UFSC')

        })
    })
 })
