describe("cart", () => {
  let cartProduct = `${Cypress.env("ADMIN_SERVER")}/cart`;
  let cart = [];

  it("check cart", () => {
    cy.visit(cartProduct);
    cy.get("div").then(div => {
      cy.wrap(div.eq(0)).within(() => {
        cy.get("table").then(table => {
          cy.wrap(table.eq(0)).within(() => {
            cy.get("tr").then(tr => {
              cy.wrap(tr.eq(0)).within(() => {
                cy.get("td").then(td => {
                  cy.wrap(td.eq(4)).click();
                });
              });
            });
          });
        });
      });
    });
  });
});
