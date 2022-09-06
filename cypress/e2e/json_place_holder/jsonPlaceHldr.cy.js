const { expect, should } = require("chai");
const { describe, it } = require("mocha");

var myConfig = Cypress.config()
const JSON_API_URL = Cypress.env('JSON_API_BASE_URL')
const propName = 'name'
const valName = 'Venky'

describe('JSON Place holder api intercept', () => {
    it('posts api intercept', () => {
        
        cy.visit(JSON_API_URL).title('JSONPlaceholder - Free Fake REST API')

        cy.intercept({
                path: '/posts'

        }).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then((resp) =>{

            cy.log(JSON.stringify(resp))
            expect(resp.response.body).to.have.length(100)
            expect(resp.response).to.include.keys('headers', 'body')
           
        })
    });

    it('posts api with intercept - static data', () => {
        cy.visit(JSON_API_URL)

        cy.intercept('GET', '/posts',{name: "Venky", tool: "Cypress"}).as('posts')
        
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then((resp) =>{

            cy.log(JSON.stringify(resp))
            expect(resp.response.body).to.have.property(propName,valName)
            expect(resp.response).to.include.keys('headers', 'body')
            expect(resp.response).to.have.property('body')
        })
    });

    it('posts api intercept with dynamic response', () => {
        
            cy.visit(JSON_API_URL).title().should('include', 'JSON')
            cy.intercept('GET', '/posts',{fixture: 'LoginData.json'}).as('posts')
            cy.get("table:nth-of-type(1) a[href='/posts']").click()
            
            cy.wait('@posts').then((resp) => {

            cy.log(JSON.stringify(resp))
            expect(resp.response.body).to.have.length(12)
            expect(resp.response).to.include.keys('headers', 'body')
        })
    });

   });