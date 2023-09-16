//4 typre of alert 
//1- alert(only text) 
//2- confirmation alert(text, ok and cancel button) 
//3- alert with enter value cancel and ok button
//4. authentication alert (username and passwoerd to enter in alert to authenticate) 


// alert with 
describe(' diffrent type of alerts ', ()=>{
 

    it.skip('alerts only text', ()=>{
     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

     cy.get("button[onclick='jsAlert()']").click();

     cy.on('window:alert', (t)=>{
        expect(t).to.contains("I am a JS Alert");
     })

     // alert automatically closed by cypress

     cy.get("#result").should("have.text", 'You successfully clicked an alert')
     
    })

// //2. text and ok button
//     it.skip('alerts with text, ok and cancel buttton ', ()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
   
//         cy.get("button[onclick='jsConfirm()']").click();
   
//         cy.on('window:confirm', (t)=>{
//         expect(t).to.contains('I am a JS Confirm')

//         })
//         cy.on('window:confirm)', (t)=> true);
//         // alert automatically closed by cypress
   
//         cy.get("#result").should("have.text", 'You clicked: Ok')
 
        
//        })


// //text and Cancel  button
//        it.only('alerts with text, ok and cancel buttton ', ()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
   
//         cy.get("button[onclick='jsConfirm()']").click();
       
//         cy.on('window:confirm', (t)=>{
           
//         expect(t).to.contains('I am a JS Confirm');
       
       
//         })
//         cy.on('window:confirm)', (t)=> false);
//         // Note: alert automatically closed by cypress

//         cy.get("#result").should('have.text', 'You clicked: Cancel')
//        })


       //3. enter text, cancel and ok button

       it('alert bix with enter text, cancel and ok button', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        cy.get("#result").should("have.text", 'You entered: welcome')
 
       })
    


})