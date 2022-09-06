class Login {

    loginSuccess(email, password, success_code, token) {
        const vtoken = 'token'
        
        
        cy
     .request({
        method: 'POST',
       
        url: Cypress.env('REQS_API_BASE_URL') + '/api/login',
        body: {
            "email": email,
            "password": password
        },
       
    }).then((resp) => {
 
            expect(resp.status).to.eq(success_code)
            expect(resp.body).to.have.property(vtoken,token)
            
            expect(resp.headers).to.include({    
                'content-type': 'application/json; charset=utf-8'
            })
            expect(resp).to.have.property('headers')
            expect(resp).to.have.property('duration').lessThan(500)
            
            expect(resp, 'has duration in ms').to.have.property('duration').and.be.a('number')
            cy.log(JSON.stringify(resp.body))
          
    });

    }

    loginError(email, password, errorCode, errorMessage) {
        const propError = 'error'

        cy
        .request({
           method: 'POST',
          
           url: Cypress.env('REQS_API_BASE_URL') + '/api/login',
           failOnStatusCode: false,
           body: {
               "email": email,
               "password": password
           },
       }).then((resp) => {
 
               expect(resp.status).to.eq(errorCode)
               expect(resp.body).to.have.property(propError,errorMessage)
               expect(resp).to.have.property('headers')
               expect(resp).to.have.property('duration')
               expect(resp, 'has duration in ms').to.have.property('duration').and.be.a('number')
               expect(resp.headers).to.include({    
                   'content-type': 'application/json; charset=utf-8'
               })
               cy.log(JSON.stringify(resp.body))
            
   
       });

    }

    loginPartEmail(email, errorCode, errorMessage) {
        const propError = 'error'
        cy
        .request({
            method: 'POST',
       
            url: Cypress.env('REQS_API_BASE_URL') + '/api/login',
            failOnStatusCode: false,
            body: {
                 "email": email  
            },
        }).then((resp) => {

            
            expect(resp.status).to.eq(errorCode)

            expect(resp.body).to.have.property(propError,errorMessage)
            expect(resp).to.have.property('headers')
            expect(resp).to.have.property('duration')
            expect(resp, 'has duration in ms').to.have.property('duration').and.be.a('number')
            expect(resp.headers).to.include({    
                'content-type': 'application/json; charset=utf-8'
            })
    
            cy.log(JSON.stringify(resp.body))
          

    });

    }

    loginPartPwd(password, errorCode, errorMessage) {
        const propError = 'error'
        cy
        .request({
            method: 'POST',
       
            url: Cypress.env('REQS_API_BASE_URL') + '/api/login',
            failOnStatusCode: false,
            body: {
                "password": password
            },
        }).then((resp) => {
 
            expect(resp.status).to.eq(errorCode)
            expect(resp.body).to.have.property(propError,errorMessage)
            expect(resp).to.have.property('headers')
            expect(resp).to.have.property('duration')
            expect(resp, 'has duration in ms').to.have.property('duration').and.be.a('number')
            expect(resp.headers).to.include({    
                'content-type': 'application/json; charset=utf-8'
            })
    
            cy.log(JSON.stringify(resp.body))
          
    });

    }


}

export default Login