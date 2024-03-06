/// <reference types="cypress" />

Cypress.Commands.add('realizarPesquisa', (search) => { 
    cy.get('.slide-search')
        .first().click()
    cy.get('[name="s"]', { timeout: 100000 })
        .should('be.visible')
        .type(search).type('{enter}')
 })

 Cypress.Commands.add('validarPesquisa', (search) => {
    /*
    cy.get('[itemprop="headline"]').each(($title) =>
        expect($title.text().toLowerCase()).to.contains(search.toLowerCase())
     )
     */
     cy.get('[itemprop="headline"]').first().contains(search.toLowerCase(), { matchCase: false })
 })

 Cypress.Commands.add('validarMensagemPesquisaInvalida', (mensagem) => {
     cy.contains(mensagem).should("be.visible")
 })

 declare namespace Cypress {
    interface Chainable<Subject = any> {
        realizarPesquisa(search: string): Chainable<any>
        validarPesquisa(contains: string): Chainable<any>
        validarMensagemPesquisaInvalida(mensagem: string): Chainable<any>
    }
}