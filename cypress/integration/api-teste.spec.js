describe ("Validando requisições em API", () =>{

    beforeEach(() => {

        

        cy.visit("https://www.saraiva.com.br")
    })
   
    it("Contain metadata ?", () =>{

        cy.get('script[src="//suite.linximpulse.net/impulse/saraiva-vtex/metadata.js"]')

     })

     it("Contain Impulse.js?",() => {

        cy.get('script[src="//suite.linximpulse.net/impulse/impulse.js"]')
     })
})
