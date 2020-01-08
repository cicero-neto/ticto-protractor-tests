browser.waitForAngularEnabled(false);

let Checkout = require('../page-objects/checkout.po');

describe ('New Checkout', () => {
    browser.manage().timeouts().implicitlyWait(5000);

    it('try to submit personal data form', () => {
        Checkout.visit('http://dev.pay.ticto.com.br/c/3C0FAF67');

        Checkout.personalDataForm('John Doe', 'john.doe@', '123456789', '12345678901');

        expect($('.invalid-feedback').isPresent()).toBe(true);
    });

    it('try to submit personal data form and go to Payment tab', () => {
        Checkout.visit('http://dev.pay.ticto.com.br/c/3C0FAF67');

        Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '34181356841');

        let title = $('#personal-data > div > div > div > div.col-sm-12.col-lg-8.remove-padding.background-form.shadow.border-style > div > div:nth-child(4) > div > div > div:nth-child(1) > div > h3')

        expect(title.getText()).toContain('Pagamento')
    });
});

