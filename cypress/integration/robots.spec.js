describe("Check if page has robots", () => {

beforeEach ( function () {
    cy.visit("https://www.saraiva.com.br")
    cy.wait(4000)
})


    it('Contain robots?', () => {
        cy.title()
          .should('contain','Saraiva.com.br: Livros, Tablets, Blu-Ray, Eletrônicos, Notebooks, Smartphones e mais.')
    })

    it("Resource element", () =>{

        cy.get(".impulse-input.search-input.default").type("Livro")
    })
})