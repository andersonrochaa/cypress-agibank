describe('Search bar em blog do Agi', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.viewport(1920, 1080)
  })

  it('Validar search bar em blog do Agi', () => {
    cy.realizarPesquisa("compras")
    cy.validarPesquisa("compras")
  })

  it('Validar pesquisa indevida no search bar', () => {
    cy.realizarPesquisa("pesquisainvalidateste")
    cy.validarMensagemPesquisaInvalida();
  })
})