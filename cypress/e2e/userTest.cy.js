describe("Add Todos", () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit("http://localhost:3000");
  });

  it("should add ten todos", () => {
    const todos = Array.from({ length: 10 }, (_, i) => `Todo ${i + 1}`);

    todos.forEach((todo) => {
      // Type the todo title into the input field
      cy.get('input[type="text"]').type(todo);

      // Click the "Add" button
      cy.contains("button", "Add").click();

      // Verify the todo is added to the list
      cy.contains("li", todo).should("exist");
    });

    // Verify the total number of todos is 10
    cy.get("ul > li").should("have.length", 10);
  });
});
