/// <reference types="Cypress" />

import {FormFill} from "./pageObject/formFillObject";

describe ('Fill Form', function() {

  it('filling in the fields', function(){

      const form=new FormFill();
      form.visit();
      form.fillName('Teste');
      form.fillLastName('Cypress');
      form.fillEmail();
      form.fillAndress('Rua teste cypress');
      form.fillUniversity('Cypress University');
      form.fillProfile('Quality Assurance');
      form.fillGender('Male');
      form.fillAge(30);
      form.submit();

    })
})