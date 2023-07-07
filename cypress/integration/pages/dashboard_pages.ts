export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_addTOcart = '#add-to-cart-sauce-labs-backpack'
    icon_shopping_cart = '.shopping_cart_link'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addTOcart(){
        cy.get(this.btn_addTOcart).click()
        cy.get(this.icon_shopping_cart).should('have.text', '1')
        cy.get('.app_logo').click()
    }
}