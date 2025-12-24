

//intialize the variable to call it in the tests
let currentUrl;

//describe suite represents what module/functionality is being tested
describe('Brave Search Functionality', () => {

    //it block represents a test case
    it('Search for a keyword and verify the search url contains the keyword', () => {

        // Visit Brave Search homepage
        cy.visit('https://search.brave.com/');
        //type cypress in search box
        cy.get('[id="searchbox"]').type('cypress testing{enter}');

        //capture the url and verify it contains cypress+testing
        cy.url().should('contain', 'cypress+testing');

        //store the current url to use in test 2
        cy.url().then((url) => {
            currentUrl = url;
        });

    });//end of test 1

    it('clicks on more button and verifies additional content is shown', () => {

        cy.visit(currentUrl);
        cy.get('[id="llm-show-more-button"]').click();
        //verify the text contains Cypress is a modern, open-source end-to-end testing framework
        cy.get('[id=results]').invoke('text').then((results) => {
            expect(results).to.contain('Cypress is a modern, open-source JavaScript-based end-to-end (E2E) testing');
        });


    });//end of test 2

});//brave search test file