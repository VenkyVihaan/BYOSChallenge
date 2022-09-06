const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    responseTimeout: 50000,
    chromeWebSecurity: false,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
     UNIV_API_BASE_URL: 'http://universities.hipolabs.com/search',
     REQS_API_BASE_URL: 'https://reqres.in',
     JSON_API_BASE_URL: 'https://jsonplaceholder.typicode.com'
  },

});
