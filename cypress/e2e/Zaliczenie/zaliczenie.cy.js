/// <reference types="cypress" />
import searchquery from './../../fixtures/search.json'

Cypress.Commands.add('closecookies', () => {
    cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
})
beforeEach('setup', () => {
     cy.viewport(1440, 1080);
    cy.visit(`https://www.google.com`);
    cy.url().should(`contain`, `google`);
    cy.fixture('search').as('slownik');
})
describe('Test 1 - Testy cookies pop-up na google', () => {
it(`Accept Cookies`, () => {
    cy.get('#L2AGLb > .QS5gu').should('be.visible');
    cy.get('#L2AGLb > .QS5gu').click();
    cy.get('#L2AGLb > .QS5gu').should('not.be.visible');
})
 
})
describe('Test 2 - Wyszukiwanie i przechodzenie', () => {
it('search', function(){
        cy.closecookies();
        cy.get('#APjFqb').clear().type(searchquery[0].slownik);
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
        cy.url().should('contain', '?q=galeria+slendzinskich');
        cy.get('.tF2Cxc > .yuRUbf > a > .LC20lb').click();
        cy.get('.cb-enable').click().should('not.be.visible');
})
})
describe('Test 3 - Sprawdzanie listy rozwijanej i przechodzenie na jedną pozycje', () => {
    it('list', function () {
     cy.visit(`https://galeriaslendzinskich.pl`);
        cy.get('#btn-open > .fa').click();
        cy.contains('Wizyta').click();
        cy.get('.cb-enable').click().should('not.be.visible');
        cy.scrollTo('bottom');
})
})
describe('Test 4 - wybieranie regionów i wyszukiwanie', () => {
    it('choosing regions', function () {
        cy.visit('https://www.olx.pl/');
        cy.url().should('include', "https://www.olx.pl/");
        cy.get('#onetrust-accept-btn-handler').click().should('not.be.visible');
        cy.get('[data-cy="homepage_input_locationsearch"]').click();
        cy.get('#a-region-18').click();
        cy.get('[data-cy="homepage_input_textsearch"]').type('spider-man');
        cy.get('[data-cy="homepage_button_search"]').click();
        
})
})
describe('Test 5 - zawężanie wyszukiwania', () => {
    it('choosing filtrs', function () {
        cy.visit('https://www.olx.pl/');
        cy.url().should('include', "https://www.olx.pl/");
        cy.get('#onetrust-accept-btn-handler').click().should('not.be.visible');
        cy.get('[data-cy="homepage_input_locationsearch"]').click();
        cy.get('#a-region-18').click();
        cy.get('[data-cy="homepage_input_textsearch"]').type('koszulkowo');
        cy.get('[data-cy="homepage_button_search"]').click();
        cy.get('[data-cy="category-dropdown"]').click();
        cy.contains('Moda').click();
        cy.get(':nth-child(1) > [data-testid="label"] > [data-testid="checkbox-field"]').click();
})
})
describe('Test 6 - google play', () => {
    it('google play', function () {
        cy.visit('https://www.olx.pl/');
        cy.url().should('include', "https://www.olx.pl/");
        cy.get('#onetrust-accept-btn-handler').click().should('not.be.visible');
        cy.scrollTo('bottom');
        cy.get('#footerAppAndroid > .icon').invoke("removeAttr", "target").click();
        cy.url().should('contain',"olx");
    })
})
describe('Test 7 - Logowanie się w onet przy uzyciu złego loginu', () => {
it('logging to onetl', function () {
    cy.visit('https://konto.onet.pl/signin?state=https%3A%2F%2Fpoczta.onet.pl%2F&client_id=poczta.onet.pl.front.onetapi.pl');
    cy.url().should(`contain`, `onet`).wait(2000);
    cy.get('.cmp-intro_acceptAll > span').click().should('not.be.visible');
    cy.get('#email').type('pr.klimgmail.com');
    cy.get('#password').type('zlehaslo');
    cy.get('button[type="submit"]').click();
    cy.contains('Nieprawidłowy');
  });
});
describe('Test 8 - Test nawigacji', () => {
it('navigating', function () {
    cy.visit('https://www.gov.pl/');
    cy.url().should(`contain`, `gov`);
    cy.get('#govpl-i-council_of_ministers').click().wait(1000);
    cy.url().should('include', 'rada-ministrow');
    cy.contains('Jarosław Kaczyński').should('be.visible');
    cy.get('#govpl-i-gov_home').click({force: true});
    cy.url().should('include', 'gov');
  });
});
describe('Test 9 - Test wysyłania formularza', () => {
it('contact form', function () {
    cy.visit('https://www.9bits.com/pl');
    cy.url().should(`contain`, `9bits`);
    cy.get('.container--full > .title').scrollIntoView();
    cy.get('#mat-input-0').type('test');
    cy.get('#mat-input-1').type('test');
    cy.get('#mat-input-2').type('test');
    cy.get('#mat-input-3').type('test@test.pl');
    cy.get('.contact__form > .big-button > .button').click();
  });
});
describe('Test 10 - Test dodania do koszyka', () => {
    it('adding to cart', function () {
            cy.visit('https://www.zalando.pl/polo-ralph-lauren-jermain-athletic-unisex-sneakersy-niskie-white-po215o019-a11.html');
            cy.url().should(`contain`, `zalando`);
            cy.get('[data-testid="pdp-size-picker-trigger"]').click();
            cy.contains('49').click();
            cy.get('[data-testid="pdp-add-to-cart"] > .DJxzzA').click().wait(1000)
        cy.visit('https://www.zalando.pl/cart/');
            cy.contains('Lauren');
            
        });
    });
