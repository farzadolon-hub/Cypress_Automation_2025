






//describe suite represents what module/functionality is being tested
describe('Brave Search Functionality', () => {
    let keyword = [];
    keyword.push('JavaScript');
    keyword.push('TypeScript');
    keyword.push('Cypress Testing Framework');

    //it block represents a test case
    it('Search for a keyword and verify the search url contains the keyword', () => {
        keyword.forEach((keyValue) => {

        // Visit Brave Search homepage
        cy.visit('https://search.brave.com/');
        //type cypress in search box
        cy.get('[id="searchbox"]').type(`${keyValue}{enter}`);

        //capture the url and verify it contains cypress+testing
        cy.url().should('contain', `${keyValue.replace(/ /g, '+')}`);

    }); //end of for each loop


    });//end of test case

});//brave search test file