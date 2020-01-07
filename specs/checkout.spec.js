browser.waitForAngularEnabled(false);

let Checkout = require('../page-objects/checkout.po');

describe ('New Checkout', () => {

    it('try to submit personal data form', () => {
        Checkout.visit('https://payb.ticto.com.br/c/B82F17C1');
        browser.driver.sleep(5000);

        Checkout.personalDataForm('John Doe', 'john.doe@', '123456789', '12345678901');

        expect($('.invalid-feedback').isPresent()).toBe(true);

        browser.driver.sleep(3000);
    });

    it('try to submit personal data form and go to Payment tab', () => {
        Checkout.visit('https://payb.ticto.com.br/c/B82F17C1');
        browser.driver.sleep(5000);

        Checkout.personalDataForm('John Doe', 'john.doe@gmail.com', '12345678900', '12345678901');

        let title = $('#personal-data > div > div > div > div.col-sm-12.col-lg-8.remove-padding.background-form.shadow.border-style > div > div:nth-child(4) > div > div > div:nth-child(1) > div > h3')

        expect(title.getText()).not.toContain('Pagamento')

        browser.driver.sleep(3000);
    });
});

