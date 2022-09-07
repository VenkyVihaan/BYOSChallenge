class universitySearch {
    
    nameSearch(name, url) {
    const propName = 'name'

        cy
        .request({
           method: 'GET',
           url: url, 
           qs: {

            name: name
            
            }
           
       }).then((resp) => {
           const uniName = resp.body
           expect(resp.duration).to.not.be.greaterThan(1000)
           return uniName     
   
      }).then((uniName) => {
       for(let i=0; i< uniName.length; i++)
     
       cy.request({
           
           method: 'GET',
           url: url,
           qs: {
               name: uniName[i].name
             }
           
       }).then((resp1)=> {
           expect(resp1.status).to.eq(200)
           expect(resp1.body[0]).to.have.property(propName, uniName[i].name)
           expect(resp1.headers).to.include({    
            'content-type': 'application/json'
        })
        expect(resp1).to.have.property('headers')
        expect(resp1).to.have.property('duration').lessThan(500)

           cy.log(JSON.stringify(resp1.body))
       })
   
      })

      return this
    }

}

    export default universitySearch