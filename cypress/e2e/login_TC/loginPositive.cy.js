import universitySearch from "../pageobjects/oLogin.cy";
import { describe, it } from 'mocha';
import Login from "../pageobjects/oLogin.cy";


describe('Login Api with positive test cases', function() {
    let logindata
    const login = new Login ()

    beforeEach(() => {
        cy.fixture('LoginData').then((idata) => {
            logindata = idata

        })
    });
    
    it('Login api/post - email - valid | pwd - valid', () => {
        
      login.loginSuccess(logindata.api_inputs[1].email,logindata.api_inputs[1].password,logindata.api_inputs[0].status_code,logindata.api_inputs[0].r_token)
       
    });
});