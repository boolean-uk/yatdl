describe("YATDL", function() {
  it("shows a heading", function() {
    cy.visit('/')
    cy.get('#todoList-heading').should("contain", "Yet Another Todo List!")
  })

  it("can save and show a todo", function() {
    cy.visit('/')
    // add text
    cy.get('#todoList-textbox').type("My first todo!")
    // click button
    cy.get('#todoList-button').click()
    // assert text on page
    cy.get('#todos-0').should("contain", "My first todo!")
  })

  it("has todos which you can toggle strikethrough", function() {
    cy.visit('/')
    // create a todo
    cy.get('#todoList-textbox').type("My first todo!")
    cy.get('#todoList-button').click()
    // get the checkbox
    // click it
    cy.get('#todos-0-checkbox').click()
    // assert that the text has css prop: strikethrough
    cy.get('#todos-0').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
  })

  it("can clear all the todos", function() {
    cy.visit('/')
    // create a todo
    cy.get('#todoList-textbox').type("My first todo!")
    cy.get('#todoList-button').click()
    // click on a link
    cy.get('#todoList-clearLink').click()
    // assert that there are no todos
    cy.get('#todos-0').should('not.exist')
  })
})
