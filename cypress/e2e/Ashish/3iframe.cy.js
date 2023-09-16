//approch1- locally get iframe

// approch2- create custom command for iframe in command .js file

// approch 3- pulign CYpress iframe plugin >> run command- npm install -D cypress-iframe >> use import 'cypress-iframe';

import 'cypress-iframe';

describe('iframe',()=>{

    it.skip('iframetestest', ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

       
       //ifrmake find>> inside frame document and body visible. then wrp it >> store in valriable

        let iframe= cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        //cy.get("[aria-label='Bold']").click();
        iframe.clear().type("welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
    })



    // approch 2 by useing custom command- create a cusom command >> and that command we use in every command>> go to command .js and paste some code

    it.skip('iframeCustom Command', ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

       
       //iframe method written in commands.js file

       cy.getifrmae('#mce_0_ifr').clear(). type("Welcome {ctrl+a}");
       cy.getifrmae('#mce_0_ifr').type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
    })

// approch 3 - cypress. plugin
    it.only('iframegetby Plugin', ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");
        
        cy.frameLoaded('#mce_0_ifr')      //load the frame

        cy.iframe('#mce_0_ifr').clear(). type("welcome pulign {ctrl+a}")
       
        cy.get("[aria-label='Bold']").click();
    })

  


})