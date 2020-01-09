browser.waitForAngularEnabled(false);

let Checkout = require('../page-objects/checkout.po');

describe ('New Checkout', () => {
    browser.manage().timeouts().implicitlyWait(5000);

    it('try to submit personal data form', () => {
        Checkout.visit('https://payb.ticto.com.br/c/43E771ED');

        Checkout.personalDataForm('John Doe', 'john.doe@', '123456789', '12345678901');

        expect($('.invalid-feedback').isPresent()).toBe(true);
    });

    it('try to submit personal data form and go to Payment tab', () => {
        Checkout.visit('https://payb.ticto.com.br/c/43E771ED');

        Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');

        let title = $('#personal-data > div > div > div > div.col-sm-12.col-lg-8.remove-padding.background-form.shadow.border-style > div > div:nth-child(4) > div > div > div:nth-child(1) > div > h3')

        expect(title.getText()).toContain('Pagamento')
    });

    it('try to submit payment data form with invalid credit card brand', () => {
        let invalidCardBrandMessage = 'Cartão com bandeira inválida, confira o número e tente novamente!'

        Checkout.creditCardInfo('8484848484848484', 'John Doe', '03', '2020', '123');
        browser.sleep(2000)

        expect($('.iziToast-capsule').getText()).toContain(invalidCardBrandMessage)
    });
});

