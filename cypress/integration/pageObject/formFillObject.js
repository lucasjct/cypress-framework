/// <reference types="Cypress" />


class formFill {

    visit(){

        cy.visit('https://automacaocombatista.herokuapp.com/users/new')
    }

    fillName(value)

    {
        const field=cy.get('#user_name')
        field.clear()
        field.type(value)
        return this

    }

    fillLastName(value)

    {
        const field=cy.get('#user_lastname')
        field.clear()
        field.type(value)
        return this
    }

    fillEmail()
    

    {
        const field=cy.get('#user_email')
        field.clear()
        var mail = Math.random().toString(36)
        var andress = '@gmail.com.br'
        field.type(mail.concat(andress))
        return this
    }

    fillAndress(value)

    {
        const field=cy.get('#user_address')
        field.clear()
        field.type(value)
        return this
    }

    fillUniversity(value)

    {
        const field=cy.get('#user_university')
        field.clear()
        field.type(value)
        return this
    }

    fillProfile(value)

    {
        const field=cy.get('#user_profile')
        field.clear()
        field.type(value)
        return this
    }


    fillGender(value)

    {
        const field=cy.get('#user_gender')
        field.clear()
        field.type(value)
        return this
    }

    fillAge(value)

    {
        const field=cy.get('#user_age')
        field.clear()
        field.type(value)
        return this
    }

    submit()
    {
        const button = cy.get('[type=submit]')
        button.click()
    }

}

export default formFill