describe("template spec", () => {
  it("correct url", () => {
    cy.visit("http://localhost:3000/");
  });

  it("header contains correct text", () => {
    cy.visit("http://localhost:3000/sign-up");
    cy.get("h1").contains("Sign Up");
  });

  it("Email must be at least 3 characters long", () => {
    cy.visit("http://localhost:3000/sign-up");
    cy.get('[data-cy="validate-email-input"]').type("L");
    cy.get('[data-cy="validate-password-input"]').type("password");
    cy.get('[data-cy="submit-button"]').click();
    cy.get("label").contains("Email must be at least 3 characters long");
  });

  it("Initially, the button should be disabled when both fields are empty", () => {
    cy.visit("http://localhost:3000/sign-up");
    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });

  it("Write something in email-field and password and clear email-field and the button should be disabled", () => {
    cy.visit("http://localhost:3000/sign-up");
    cy.get('[data-cy="validate-email-input"]').type("lisa@gmial.com");
    cy.get('[data-cy="submit-button"]').should("be.disabled");
    cy.get('[data-cy="validate-email-input"]').clear();
    cy.get('[data-cy="validate-password-input"]').type("password");
    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });

  it("If you sign-up you should be redirect to home.", () => {
    cy.visit("http://localhost:3000/");
    cy.visit("http://localhost:3000/sign-up");
    cy.get('[data-cy="validate-email-input"]').type("lina@gmial.com");
    cy.get('[data-cy="validate-password-input"]').type("password");
    cy.get('[data-cy="submit-button"]').click();
    cy.url({ timeout: 10000 }).should("eq", "http://localhost:3000/");
  });
});
