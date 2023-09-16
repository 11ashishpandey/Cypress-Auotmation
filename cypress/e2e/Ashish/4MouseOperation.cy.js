
import 'cypress-iframe';

describe('Mouse Operation',()=>{

    it.skip('Mouse Hover',()=>{
        cy.visit("demo.opencart.com")
        cy.get('#narbar-menu > ul > li:nth-child(1)').trigger('mouseover').click();
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('be.visible')

    });


    // approcha 1- user trigger method
    //approch 2-  usedirect method>> right method
    it.skip('Right Click',()=>{
        cy.visit("https://demoqa.com/buttons")
        //cy.get(' #PtVZn').click();
       
      //  cy.get('#rightClickBtn').trigger('contextmenu', )
      //  cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
      cy.get('#rightClickBtn').rightclick();
        
    });


    it.only('Double Click',()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult')  // frameload

        // // //approcah 1- with ifmrae and check inside value then trigget dblclick 
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        // cy.iframe('#iframeResult').find("#field2").should('have.value', 'Hello World!');
      

        //approcah 2- direct dblclick method used 
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find("#field2").should('have.value', 'Hello World!');

        
        
    })

    it('Drag and Drop using plugin',()=>{
        
    })
})