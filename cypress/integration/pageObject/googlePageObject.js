/// <reference types="Cypress" />

class googlePageObject {

    visit()

    {
        cy.visit('https://www.google.com')
    }

    search (value)
    {
        const field=cy.get(".gLFyf.gsfi")
        field.clear()
        field.type(value)
        return this

    }

    submit()
    {
        const button=cy.contains('Pesquisa')
        button.click({force: true})
    }

    otherPage(value)
    {
        const field=cy.get('.user-box.-left.-huge.-rel.-adsBottom')
        field.clear()
        field.type(value)
        return this
    }
  
}

export default googlePageObject
