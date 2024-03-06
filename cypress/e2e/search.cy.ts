import massa from "../fixtures/massa"

describe('Search bar em blog do Agi', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.viewport(1920, 1080)
  })

  it('Validar search bar em blog do Agi', () => {
    cy.realizarPesquisa(massa.pesquisaValida.text)
    cy.validarPesquisa(massa.pesquisaValida.text)
  })

  it('Validar pesquisa indevida no search bar', () => {
    cy.realizarPesquisa(massa.pesquisaInvalida.text)
    cy.validarMensagemPesquisaInvalida(massa.pesquisaInvalida.mensagemErro);
  })
})