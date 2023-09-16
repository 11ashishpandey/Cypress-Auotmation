//before
//after
//beforeeach
//aftereach

describe('testing hooks', ()=>{

    before(()=>{
        cy.log("******beforelog****")
    })

    after(()=>{
        cy.log("******afterlog****")

    })
   
    beforeEach(()=>{
        cy.log("******beforeEachlog****")
    })

    afterEach(()=>{
        cy.log("******AfterEachlog****")

    })

    it('test1',()=>{

    })
    
    it('test2',()=>{
        
    })

    it('test3',()=>{
        
    })
})