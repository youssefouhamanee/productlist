describe("products", () => {
  let products = [];

  it("displays products", () => {
    cy.visit("http://localhost:3000");

    cy.get("#root").within(() => {
      cy.get("div").then(div => {
        cy.wrap(div.eq(0)).within(() => {
          cy.get("ul").then(ul => {
            expect(ul).to.have.length(1);
            cy.wrap(ul.eq(0)).within(() => {
              cy.get("li").then(li => {
                expect(li).to.have.length(2);
                cy.wrap(li.eq(0)).within(() => {
                  //   expect("a").to.contain("Dashboard");
                  cy.get("a").contains("Shopping Cart");
                });
              });
            });
          });
        });

        cy.get("input").then(input => {
          cy.wrap(input.eq(0)).type("hjkdjfkdjkfjk");
        });
        cy.get("h1").contains("Ooops");
        cy.get("input").then(input => {
          cy.wrap(input.eq(0)).clear();
        });
        cy.get("button").click();
        cy.get("form").then(form => {
          cy.wrap(form).within(() => {
            cy.get("input").then(input => {
              cy.wrap(input.eq(0)).type("dell XPS");
              cy.wrap(input.eq(1)).type(35);
              cy.wrap(input.eq(2)).type(4);
              const fileName = "dell.jpeg";
              cy.fixture(fileName).then(fileContent => {
                cy.get('[type="file"]').upload({
                  fileContent,
                  fileName,
                  mimeType: "image/jpeg"
                });
              });
              cy.get("button").click();
            });
          });
        });
        cy.get("div").then(div => {
          cy.wrap(div.eq(9)).within(() => {
            cy.get("i").click();
            cy.get("i").click();
          });
        });
        cy.get("span").then(span => {
          cy.wrap(span.eq(0)).within(() => {
            cy.get("a").click();
          });
        });
      });
    });
    cy.get("div").then(div => {
      cy.wrap(div.eq(0)).within(() => {
        cy.get("table").then(table => {
          cy.wrap(table.eq(0)).within(() => {
            cy.get("tr").then(tr => {
              cy.wrap(tr.eq(0)).within(() => {
                cy.get("td").then(td => {
                  cy.wrap(td.eq(4)).within(() => {
                    cy.get("i").click();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
