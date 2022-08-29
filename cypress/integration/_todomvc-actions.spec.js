/// <reference types="cypress" />

import { TodoPage, ValidateTodoText} from "../pages/todo-page";

describe('todo actions', ()=>{
    const todoPage = new TodoPage;
    //let todoValidate = new ValidateTodoText;
    beforeEach(()=>{
        todoPage.navigate();
        todoPage.addTodo("Clean room");
    })

    it("should add a new todo to the list", () => {        
        ValidateTodoText(0,'Clean room');
        cy.get('.toggle').should('not.be.checked');
    })
    
    it("should mark a todo as completed", () => {
        todoPage.toggleTodo(0);
        cy.get('.toggle').should('have.css', 'text-decoration-line');
    })
    
    it("should clear compleated todos", () => {
        cy.get('.toggle').click()
        
        cy.contains('Clear').click()
        
        cy.get('.todo-list')
        .should('not.have.descendants', 'li');
    })

})
