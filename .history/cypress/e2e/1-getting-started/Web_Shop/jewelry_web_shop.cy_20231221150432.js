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
//jewelry
cy.get('.top-menu > :nth-child(6) > a').click()
//
//
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-71').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
cy.get(':nth-child(2) > .product-item > .picture').click()
cy.get('#add-to-cart-button-14').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(6) > a').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(6) > a').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(6) > a').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
//
//
  })
})


