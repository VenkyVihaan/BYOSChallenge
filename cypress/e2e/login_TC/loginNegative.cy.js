import universitySearch from "../pageobjects/oLogin.cy";
import { describe, it } from 'mocha';
import Login from "../pageobjects/oLogin.cy";


describe('Login Api with negative test cases', function() {
    let logindata
    const login = new Login ()
    
    beforeEach(() => {
        cy.fixture('LoginData').then((idata) => {
            logindata = idata

        })
    });

    // error - missing email or username
  context('Login api/post - email - invalid empty | pwd - valid', () => {

    it('Missing email or username - SC -400', function()  {
        
        login.loginError(logindata.api_inputs[2].email,logindata.api_inputs[2].password,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_missemail)
    });

  });

  context('Login api/post - email - invalid empty | pwd - invalid empty', () => {

    it('Missing email or username - SC -400', function()  {

        login.loginError(logindata.api_inputs[3].email,logindata.api_inputs[3].password,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_missemail)

       // cy.Login_UnSuccessfull(this.Idata.api_inputs[3].email,this.Idata.api_inputs[3].password,this.Idata.api_inputs[0].error_code,this.Idata.api_inputs[0].error_message_missemail)     
    });

  });

  // error - missing password

  context('Login api/post - email - valid | pwd - invalid', () => {

    it('missing password - SC -400', function()  {
        login.loginError(logindata.api_inputs[4].email,logindata.api_inputs[4].password,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_misspwd)

       // cy.Login_UnSuccessfull(this.Idata.api_inputs[4].email,this.Idata.api_inputs[4].password,this.Idata.api_inputs[0].error_code,this.Idata.api_inputs[0].error_message_misspwd)      
    });

  });

  context('Login api/post - email - valid | pwd - invalid empty', () => {

    it('missing password - SC -400', function()  {
        login.loginError(logindata.api_inputs[5].email,logindata.api_inputs[5].password,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_misspwd)

      //  cy.Login_UnSuccessfull(this.Idata.api_inputs[5].email,this.Idata.api_inputs[5].password,this.Idata.api_inputs[0].error_code,this.Idata.api_inputs[0].error_message_misspwd)
    
    });

  });

// error - user not found

   context('Login api/post - email - invalid | pwd - valid', () => {

    it('user not found - SC -400', function()  {
        login.loginError(logindata.api_inputs[6].email,logindata.api_inputs[6].password,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_usrnotfound)

     //   cy.Login_UnSuccessfull(this.Idata.api_inputs[6].email,this.Idata.api_inputs[6].password,this.Idata.api_inputs[0].error_code,this.Idata.api_inputs[0].error_message_usrnotfound)   
    });

  });

  context('Login api/post - email - invalid | pwd - invalid ', () => {

    it('user not found - SC -400', function()  {
        login.loginError(logindata.api_inputs[7].email,logindata.api_inputs[7].password,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_usrnotfound)

      //  cy.Login_UnSuccessfull(this.Idata.api_inputs[7].email,this.Idata.api_inputs[7].password,this.Idata.api_inputs[0].error_code,this.Idata.api_inputs[0].error_message_usrnotfound)    
    });

  });

  // error - Partial email

context('Login api/post partial request- email - valid | pwd - NA ', () => {

    it('missing password - SC -400', function()  {
        login.loginPartEmail(logindata.api_inputs[8].email,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_partemail)
    //    cy.Login_Partial_Email(logindata.api_inputs[8].email,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_partemail)
    //    cy.Login_Partial_Email(this.Idata.api_inputs[8].email,this.Idata.api_inputs[0].error_code,this.Idata.api_inputs[0].error_message_partemail)
        
    });
  
  });
  
  context('Login api/post partial request- email - invalid | pwd - NA ', () => {
  
    it('missing password - SC -400', function()  {
        login.loginPartEmail(logindata.api_inputs[9].email,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_partemail)

    //    cy.Login_Partial_Email(this.Idata.api_inputs[9].email,this.Idata.api_inputs[0].error_code,this.Idata.api_inputs[0].error_message_partemail)
        
    });
  
  });

  // error - Partial password

context('Login api/post partial request- email - NA | pwd - invalid ', () => {

    it('missing email or username - SC -400', function()  {
        
        login.loginPartPwd(logindata.api_inputs[10].email,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_partpwd)
      //  cy.Login_Partial_Pwd(this.Idata.api_inputs[10].password,this.Idata.api_inputs[0].error_code,this.Idata.api_inputs[0].error_message_partpwd)
        
    });
  
  });
  
  context('Login api/post partial request- email - NA | pwd - valid ', () => {
  
    it('missing email or username - SC -400', function()  {
        login.loginPartPwd(logindata.api_inputs[11].email,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_partpwd)

      //  cy.Login_Partial_Pwd(this.Idata.api_inputs[11].password,this.Idata.api_inputs[0].error_code,this.Idata.api_inputs[0].error_message_partpwd)
        
    });
  
  });
  
  context('Login api/post partial request- email - NA | pwd - invalid empty ', () => {
  
    it('missing email or username - SC -400', function()  {
        login.loginPartPwd(logindata.api_inputs[12].email,logindata.api_inputs[0].error_code,logindata.api_inputs[0].error_message_partpwd)

     //   cy.Login_Partial_Pwd(this.Idata.api_inputs[12].password,this.Idata.api_inputs[0].error_code,this.Idata.api_inputs[0].error_message_partpwd)
        
      });
  
    });

});