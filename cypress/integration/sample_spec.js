describe ('Istagram interation', () => {

    beforeEach(() => {
      cy.visit("https://www.instagram.com")
    })

    it ('contain "Instagram"', () => {
      cy.title()
        .should('contain', 'Instagram')
    cy.wait(3000)


     cy.get('form').within(($form) => {
      // you have access to the found form via
      // the jQuery object $form if you need it

      // cy.get() will only search for elements within form,
      // not within the entire document
      cy.get('input[name="emailOrPhone"]').type('Test-CyPress@email.com')
      cy.get('input[name="fullName"]').type('password')
      cy.get('input[name="username"]').type('password')
      cy.get('input[name="password"]').type('password')
      cy.root().submit()

  
      cy.contains('Log in').click({force:true}) //cordenadas 
      cy.visit("https://www.instagram.com/accounts/login/?source=auth_switcher")
      cy.wait(3000)


  
      cy.get('.HmktE').within(($form) => {
        cy.get('input[name="username"]').type('lucasjcteixeira@gmail.com')
        cy.get('input[name="password"]').type('1a2s3d1989')
        cy.root().submit()
        cy.wait(3000)
  
        })
      })
    })
  })




//tomorrow see: https://medium.com/@alexalvess/testes-e2e-com-cypress-d1f6bc415b5d
// and https://medium.com/trainingcenter/testes-e2e-no-javascript-com-cypress-io-c4202c24f82b