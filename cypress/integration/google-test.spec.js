describe ("Resource Google", () => {

    beforeEach(() => {
        cy.visit('https://www.google.com')
    }),

    it ('contain "Google"', () => {
        cy.title()
          .should('contain', 'Google')

    })

    it ('Get name and open new window', () => {
        cy.get(".gLFyf.gsfi").type("Lucas José Carvalho Teixeira")
        cy.get(".gLFyf").type('{enter}')
        cy.contains('Lucas José Carvalho Teixeira | Escavador').click({force:true}) // quebrar campos campos obrigatórios e inserir dados.
        cy.get('.user-box.-left.-huge.-rel.-adsBottom').contains('UFSC')

    })
 })