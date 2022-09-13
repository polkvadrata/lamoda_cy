export class HeaderPage {
    checkBaner(){
        let reg = new RegExp('(\/modules\/blockbanner\/img\/sale)');
        
        cy.get('.banner a').within(($el) => {
            cy.get('img')
            .should('be.visible')
            .and('have.attr', 'src')
            .should('match', reg)
            
            cy.root()
            .should('have.attr', 'href')
            .should('be.empty') //.should('not.be.empty')
        })
    }
    checkNavBar(loginName){
        let contactLink = new RegExp('(\/index\.php\?controller=contact)');
        cy.contains('Call us now:')
        .find('strong')
        .should('have.text','0123-456-789')

        cy.contains('Contact us')
        .should('have.attr', 'href')
        .should('contain', '/index.php?controller=contact')
        
        if(loginName){
            cy.contains('Sign out')
            .should('have.attr', 'href')
            .should('contain', '/index.php?mylogout=')

            cy.contains(loginName)
            .should('have.attr', 'href')
            .should('contain', '/index.php?controller=my-account')
        }
        else
            cy.contains('Sign in')
            .should('have.attr', 'href')
            .should('contain', '/index.php?controller=my-account')
    }
}