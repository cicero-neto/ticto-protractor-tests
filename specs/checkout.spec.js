browser.waitForAngularEnabled(false);

let Checkout = require('../page-objects/checkout.po');

describe('New Checkout', () => {
    describe('With Billet Payment', () => {
        browser.manage().timeouts().implicitlyWait(5000);
        browser.driver.manage().window().maximize();

        it('try to submit personal data form and go to Payment tab', () => {
            Checkout.visit('https://payb.ticto.com.br/c/A33602F7');

            let title = $('.steps-desktop .active p');
            expect(title.getText()).toContain('Dados')

            Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');

            expect(title.getText()).toContain('Pagamento');
        });

        it('try to buy with billet and go to Thank You page', () => {
            Checkout.billetTab();

            let successfulMessage = 'SUA COMPRA FOI EFETUADA COM SUCESSO!';
            expect($('.text .mx-2').getText()).toContain(successfulMessage);
        });
    });
});