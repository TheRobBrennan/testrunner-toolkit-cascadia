/// <reference types="cypress" />

const username = "standard_user"
const password = "secret_sauce"
const firstName = "Justa"
const lastName = "User"
const postalCode = "98146"

context("Option A - saucedemo.com", () => {
  describe("As a user, I should be able to log into www.saucedemo.com and then log out.", () => {
    before(() => {
      cy.visit("https://www.saucedemo.com")
    })
    it("type in a username", () => {
      cy.get("#user-name").type(username).should("have.value", username)
    })
    it("type in a password", () => {
      cy.get("#password").type(password).should("have.value", password)
    })
    it("click the login button", () => {
      cy.get("#login-button").click()
    })
    it("click on the hamburger button", () => {
      cy.get(".bm-burger-button").click()
    })
    it("click on the logout sidebar link", () => {
      cy.get("#logout_sidebar_link").click()
    })
  })
  describe("As a user, I should be able to add an item to the shopping cart and then check it out.", () => {
    before(() => {
      cy.visit("https://www.saucedemo.com")
    })
    it("type in a username", () => {
      cy.get("#user-name").type(username).should("have.value", username)
    })
    it("type in a password", () => {
      cy.get("#password").type(password).should("have.value", password)
    })
    it("click the login button", () => {
      cy.get("#login-button").click()
    })
    it("click on 'Add to Cart' for an item ", () => {
      cy.contains("ADD TO CART").first().click()
    })
    it("click on the shopping cart", () => {
      cy.get(".shopping_cart_container").click()
    })
    it("click on the Checkout button", () => {
      cy.contains("CHECKOUT").click()
    })
    it("type in a first name", () => {
      cy.get("#first-name").type(firstName).should("have.value", firstName)
    })
    it("type in a last name", () => {
      cy.get("#last-name").type(lastName).should("have.value", lastName)
    })
    it("type in a postal code", () => {
      cy.get("#postal-code").type(postalCode).should("have.value", postalCode)
    })
    it("click on the Continue button", () => {
      cy.contains("CONTINUE").click()
    })
    it("click on the Finish button", () => {
      cy.contains("FINISH").click()
    })
    it("click on the hamburger button", () => {
      cy.get(".bm-burger-button").click()
    })
    it("click on the logout sidebar link", () => {
      cy.get("#logout_sidebar_link").click()
    })
  })
  describe("As a user, I should be able to add multiple items to the shopping cart and then get rid of the items.", () => {})
  describe("As a user, I should be able to sort the items in reverse alphabetical order", () => {})
})
