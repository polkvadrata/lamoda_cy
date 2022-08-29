export class MainPage {
    navigate(){
        cy.visit('http://automationpractice.com/index.php')
        //expect($div).to.have.text('Introduction')
        cy.title().should('eq', 'My Store')
        //cy.title().should('include', 'Store')
    }
}