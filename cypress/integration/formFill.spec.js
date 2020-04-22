/// <reference types="Cypress" />

import formFill from "./pageObject/formFillObject";

describe ('Fill Form', function() {

  it('filling in the fields', function(){

      const form=new formFill() 
      form.visit()
      form.fillName('Teste')
      form.fillLastName('Cypress')
      form.fillEmail('test@1q2w33.com.br')
      form.fillAndress('Rua teste cypress')
      form.fillUniversity('Cypress University')
      form.fillProfile('Quality Assurance')
      form.fillGender('Male')
      form.fillAge(30)

      form.submit()


    })

 
})