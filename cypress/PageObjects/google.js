class googlePage {
    _SearchInputSelector = '#APjFqb'
    _CookiesAcceptSelector = '#L2AGLb > .QS5gu'
    _CookiesRejectSelector = '#W0wltc > .QS5gu'
    getSearchInput() {
        return cy.get(this._SearchInputSelector)
    }
    getAcceptCookies() {
        return cy.get(this._CookiesAcceptSelector)
    }
    getRejectCookies() {
        return cy.get(this._CookiesRejectSelector)
    }
}
export default googlePage

