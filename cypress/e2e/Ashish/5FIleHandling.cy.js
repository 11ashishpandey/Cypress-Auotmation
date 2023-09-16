//Need to install packeage- npm install --save-dev cypress-file-upload
// import 'cypress-file-upload'
//attachFile() works when file store in fixture folder only
//rename file formatt- cy.get('input#file-upload').attachFile({filePath:'sample.pdf', fileName:'renamefile.pdf'});
//  for drag and drop -cy.get('.dz-success-mark.dz-clickable').attachFile('sample.pdf', {subjecType:'drag-n-drop'})

// multiple files- 

import 'cypress-file-upload'

describe('file handling', ()=>{

    //single file upload

    it.skip('Single File Upload',()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('input#file-upload').attachFile('sample.pdf'); // attachFile('sample.pdf') works when file was on fixtures folder 
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('.example>h3').should('have.text','File Uploaded!')
    })

    //Rename the File 
    it.skip('rename',()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('input#file-upload').attachFile({filePath:'sample.pdf', fileName:'renamefile.pdf'}); // Rename the fileattachFile('sample.pdf') works when file was on fixtures folder 
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('.example>h3').should('have.text','File Uploaded!')
    })


    //Drag and Drop File - not working
    it.skip('FIle upload Drag&Drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        //cy.get("div[id='drag-drop-upload']").click();
        cy.get('#drag-drop-upload').attachFile('sample.pdf', {subjecType:'drag-n-drop'});
        cy.wait(4000);
        cy.get('#drag-drop-upload > div > div.dz-details > div > span').contains('sample.pdf')
    })

    


    


    // Multiple File upload
    it.only('FIle upload Drag&Drop',()=>{
    cy.visit("https://ufile.io/")
        cy.get('.dz-message.needsclick').attachFile('["sample.pdf", "sample copy.pdf"]'); // attachFile('sample.pdf') works when file was on fixtures folder 

        cy.wait(5000)
        cy.get('.example>h3').should('have.text','File Uploaded!')

})

    //file handing with shaodow DOMException

})