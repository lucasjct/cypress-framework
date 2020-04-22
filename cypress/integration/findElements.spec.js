Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe("DOM Elements", () => {

beforeEach ( function () {
    cy.visit("https://www.w3schools.com/")
})

    it('Test Title', () => {
        
        cy.title()
          .should('contain','W3Schools Online Web Tutorials')
    })

    it("Find Anything", () =>{

        cy.get("td").find('#gs_tti50')
    })
    it("Find Charset", () => {
        cy.get('meta[charset="UTF-8"]') //I can to do all tag way 
    })
    
    it("Change Page",() => {

        cy.contains("PYTHON").click({force:true})
    })
    
    it("Find analytics",() =>{

        cy.get('script[src="https://www.google-analytics.com/analytics.js"]')
    })
        }   
)