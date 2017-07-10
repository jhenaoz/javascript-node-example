describe('this is the first example with protractor', () => {
    it('shoud have a title', () => {
        browser.get('http://www.google.com');
        expect(browser.getTitle()).toEqual('Google');
    });
});
