///<reference types = 'Cypress'/>




describe('Orange hrm demo ', ()=>{

    it('for login and verify elements', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url()
        .should('include','web/index.php/auth/login')

        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("img[src='/web/images/ohrm_branding.png?v=1689053487449']").should('be.visible')

        cy.get('i.oxd-icon.bi-person+label.oxd-label').should('be.visible').contains('Username')

        cy.get('input[name="username"]').type("Admin").should('have.value', "Admin")

        cy.get('i.oxd-icon.bi-key+label.oxd-label').should('be.visible').contains('Password')

        cy.get('input[name="password"]').type("admin123").should('have.value', 'admin123')
        cy.get("button[type='submit']").should('be.visible')
        cy.get("button[type='submit']").click()
        

        cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
        .should('be.visible')
        .contains('Dashboard');

    
    })
})