import universitySearch from "../pageobjects/oLogin.cy";
import { describe, it } from 'mocha';
import Login from "../pageobjects/oLogin.cy";
//const UNIV_API_URL = Cypress.env('UNIV_API_BASE_URL')
//const name = "middle"

describe('Login Api with positive test cases', function() {
    let logindata
    beforeEach(() => {
        cy.fixture('LoginData').then((idata) => {
            logindata = idata

        })
    });
    
    it('Login api/post - email - valid | pwd - valid', () => {
        
        const login = new Login ()        
        //Idata.api_inputs

                console.log(logindata.api_inputs[1].email)
              //console.log(tdata.Idata.api_inputs[1].email)
      login.loginSuccess(logindata.api_inputs[1].email,logindata.api_inputs[1].password,logindata.api_inputs[0].status_code,logindata.api_inputs[0].r_token)
       

    });
});