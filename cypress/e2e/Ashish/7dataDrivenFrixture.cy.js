

describe('Fixture data driver',()=>{

    it('login with data driven by Fixture', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('example.json').then( (fixturedata) => {
            cy.get("input[name='username']").type(fixturedata.username);
        cy.get("input[name='password']").type(fixturedata.password);
        cy.get("button[type='submit']").click();

        });

        

    

    })


})