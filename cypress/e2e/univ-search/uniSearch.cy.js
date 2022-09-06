import universitySearch from "../pageobjects/oUnivSearch.cy";
import { describe, it } from 'mocha';
const UNIV_API_URL = Cypress.env('UNIV_API_BASE_URL')

describe('university search api', function () {
    let univdata
    const univSearch = new universitySearch ()
    
    beforeEach(() => {
        cy.fixture('univname').then((idata) => {
            univdata = idata
        })
    });

    it('university filter using name', () => {
                 
        univSearch.nameSearch(univdata.name,UNIV_API_URL)

    });
    it('university filter using name with different value', () => {
                 
        univSearch.nameSearch(univdata.name1,UNIV_API_URL)

    }); 
});