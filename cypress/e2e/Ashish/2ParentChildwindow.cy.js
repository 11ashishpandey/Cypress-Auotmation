
//aprroach 1- remove target attribute  target="_blank"
// for this .invoke('removeAttr', 'target') method used

//cy.go('back'); use for go to parent window

// approch2- first we get the elemetn, then pssing in function to store 'href' property then go to new url then check url is same .

// Limitation in approch 2 is if domain name change then it not work


describe('parent child window',()=>{


    //approch 1

    it.skip('approch 1 remove target attribute', ()=>{
        cy.visit("https://demo.guru99.com/popup.php");

        cy.get("a[href='../articles_popup.php']").invoke('removeAttr', 'target').click(); 


        cy.url().should('include', 'https://demo.guru99.com/articles_popup.php')
        cy.get("h2.barone").should('have.text', 'Guru99 Bank');

        cy.wait(3000);

        cy.go('back');

    })


// approch2
    it('approch 2 store element and check href value', ()=>{
        cy.visit("https://demo.guru99.com/popup.php");

        cy.get("a[href='../articles_popup.php']"). then((e)=>{

            let childwindowurl =e.prop('href');

            cy.visit(childwindowurl)
        })

        cy.url().should('include', 'https://demo.guru99.com/articles_popup.php')
        cy.get("h2.barone").should('have.text', 'Guru99 Bank');

        cy.wait(3000);

        cy.go('back');

    })




})