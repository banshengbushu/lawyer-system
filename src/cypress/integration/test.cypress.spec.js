describe("Login", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });

  it("header content is correct", () => {
    cy.get(".login-container__sign-in h1").contains("Sign in");
  });

  it("login function works", () => {
    cy.get(".login__email").type("danna");
    cy.get(".login__password").type("123456");
    cy.get(".login-sign-in__button").click();

    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:8080/login",
      response: {
        status: 200,
        redirect: "/homepage"
      }
    });
  });
});
