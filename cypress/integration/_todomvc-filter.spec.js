/// <reference types="cypress" />

import { TodoPage, ValidateTodoText} from "../pages/todo-page";

describe('todo filtering', ()=>{

    const todoPage = new TodoPage;
    
    beforeEach(()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/');

        cy.fixture('_example').then((data)=>{
            todoPage.addTodo(data.text1);

        })
                
        cy.get('.new-todo').type('Learn something{enter}');
        cy.get('.new-todo').type('Do exersises{enter}');

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it("should filter 'Active' todos", () => {        
        cy.contains('Active').click();
        
        cy.get('.todo-list li')
        .should('have.length', 2);
    })
    
    it("should filter 'Completed' todos", () => {        
        cy.contains('Completed').click();
        
        cy.get('.todo-list li')
        .should('have.length', 1);
    })

    it("should filter 'All' todos", () => {        
        cy.contains('All').click();
        
        cy.get('.todo-list li')
        .should('have.length', 3);
    })
})
