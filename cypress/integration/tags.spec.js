describe("DOM Elements", () => {

beforeEach ( function () {
    cy.visit("https://www.w3schools.com/")
})

    it('Test Title', () => {
        cy.title()
          .should('contain','W3Schools Online Web Tutorials')
    })

    it("Resource element", () =>{

        cy.get("td").find('#gs_tti50')
    })
    it("Find Charset", () => {

        
        cy.get('meta[charset="UTF-8"]') //I can to do all tag way 
    })
    
    it("Change Page",() => {

        cy.contains("PYTHON").click({force:true})
       
    })
    
    it("Found analytics",() =>{

        cy.get('script[src="https://www.google-analytics.com/analytics.js"]')
    })

    //it("Contains Google Ads?",() =>{

    //   cy.get(".c imageholder") 
