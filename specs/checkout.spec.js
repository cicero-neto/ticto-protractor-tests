browser.waitForAngularEnabled(false);

describe ('New Checkout', () => {

    it('should have name field', () => {
        browser.get('http://dev.pay.ticto.com.br/c/3C0FAF67');
        
        browser.driver.sleep(5000);

        let name = $("#name-desktop #name");

        title.sendKeys('Cicero');
        expect(title.isDisplayed()).toBe(true);

        browser.driver.sleep(2000);
    });
});

