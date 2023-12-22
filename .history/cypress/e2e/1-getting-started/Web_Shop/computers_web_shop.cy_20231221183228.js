/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
        cy.screenshot()
  })
  it('FAZER LOGIN', () =>{

    //

//MENU NOVO REGISTRO
//cy.get('.ico-register').click()
//
//cy.get('#gender-male').click()
//cy.get('#FirstName').type('LEONARDO')
//cy.get('#LastName').type('TEIXEIRA')
//cy.get('#Email').type('LLTEI@GMAIL.COM')
//
//cy.get('#Password').type('123456')
//cy.get('#ConfirmPassword').type('123456')
//
//cy.get('#register-button').click()
//cy.contains('Your registration completed').should('be.visible')

//LOGIN 
cy.get('.ico-login').click()
//
cy.get('#Email').type('LLTEI@GMAIL.COM')
cy.get('#Password').type('123456')
cy.get('#RememberMe').click()
//
cy.get('form > .buttons > .button-1').click()
cy.contains('LLTEI@GMAIL.COM').should('be.visible')
//
//COMUTERS
cy.get('.top-menu > :nth-child(2) > [href="/computers"]').click()
//
//DESKTOP
cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
//
//
//DESK - 1
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(2) > .option-list > :nth-child(1)').click()
cy.get('#product_attribute_72_6_19_91').click()
cy.get('#product_attribute_72_3_20_58').click()
cy.get('#product_attribute_72_8_30_94').click()
cy.get('#add-to-cart-button-72').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//DESK - 2
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#product_attribute_16_3_6_18').click()
cy.get('#product_attribute_16_4_7_21').click()
cy.get('#product_attribute_16_8_8_24').click()
cy.get('#add-to-cart-button-16').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//DESK - 3
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-74').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//DESK - 4
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.compare-products > .button-2').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(2) > [href="/computers"]').click()
//
//DESK - 5
cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(2) > [href="/computers"]').click()
//
//DESK - 6
cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(6) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-75').click()
//cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
cy.get('.ico-cart > .cart-label').click()
//
//
cy.get('.top-menu > :nth-child(2)').click()
cy.get(':nth-child(3) > .sub-category-item > .picture').click()
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
//
//ACESSORIOS
?/cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
cy.get(':nth-child(3) > .sub-category-item > .picture').click()
//
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-63').click()
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-66').click()
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-65').click()
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-62').click()
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-64').click()
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
cy.get(':nth-child(6) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-61').click()
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(7) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-67').click()
//
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
cy.get(':nth-child(3) > .remove-from-cart > input').click()
//cy.get(':nth-child(4) > .remove-from-cart > input').click()
//cy.get(':nth-child(5) > .remove-from-cart > input').click()
//cy.get(':nth-child(6) > .remove-from-cart > input').click()
//cy.get(':nth-child(7) > .remove-from-cart > input').click()
//cy.get(':nth-child(8) > .remove-from-cart > input').click()
//cy.get(':nth-child(9) > .remove-from-cart > input').click()
//cy.get('.update-cart-button').click()
//
//
//VISUALIZAR LISTA DE TODOS OS PRODUTOS EM FALTA
cy.get('.customer-service > ul > :nth-child(5) > a').click()
//
//LIMPAR LISTA DOS PRODUTOS EM FALTA
cy.get('.clear-list').click()
//
//HOME
cy.get('img').click()
//
  })
})


