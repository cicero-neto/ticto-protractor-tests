browser.waitForAngularEnabled(false);

let Checkout = require('../page-objects/checkout.po');

describe ('New Checkout with Billet Payment', () => {
    browser.manage().timeouts().implicitlyWait(5000);
    browser.driver.manage().window().maximize();

    it('try to submit personal data form and go to Payment tab', () => {
        Checkout.visit('https://payb.ticto.com.br/c/A33602F7');

        Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');

        let title = $('.steps-desktop .active p');
        expect(title.getText()).toContain('Pagamento')
    });

    xit('try to input and submit credit card info and go to Thank You page', () => {
        Checkout.creditCardInfo('4484 8484 8484 8481', 'John Doe', '04', '2020', '123');
        browser.sleep(2000);

        let successfulMessage = 'SUA COMPRA FOI EFETUADA COM SUCESSO!';
        expect($('.text .mx-2').getText()).toContain(successfulMessage);
    });

    it('try to buy with billet and go to Thank You page', () => {
        let billetTab = $('.payment-type .row div:first-child'),
            billetPaymentButton = $('.billet .col-12 button.shadow-sm.mb-4.btn-block');

        billetTab.click();
        billetPaymentButton.click();

        let successfulMessage = 'SUA COMPRA FOI EFETUADA COM SUCESSO!';
        expect($('.text .mx-2').getText()).toContain(successfulMessage);
    });

    xit('should have invalid credit card brand message', () => {
        let invalidCardBrandMessage = 'Cartão com bandeira inválida, confira o número e tente novamente!';
        expect($('.iziToast-capsule').getText()).toContain(invalidCardBrandMessage);
    });

    xit('should have recaptcha message', () => {
        let recaptchaMessage = 'Você deve comprovar que não é um robô';
        expect($('.iziToast-capsule').getText()).toContain(recaptchaMessage);
    });

    xit('should have unauthorized transaction', () => {
        let unauthorizedTransactionMessage = 'Transação não autorizada. Transação não permitida para o cartão.';
        expect($('.iziToast-capsule').getText()).toContain(unauthorizedTransactionMessage);
    });
});

describe ('New Checkout with Credit Card Payment', () => {
    browser.manage().timeouts().implicitlyWait(5000);
    browser.driver.manage().window().maximize();

    it('try to submit personal data form and go to Payment tab', () => {
        Checkout.visit('https://payb.ticto.com.br/c/A33602F7');

        Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');

        let title = $('.steps-desktop .active p');
        expect(title.getText()).toContain('Pagamento')
    });

    it('try to input and submit credit card info and go to Thank You page', () => {
        Checkout.creditCardInfo('4484 8484 8484 8481', 'John Doe', '04', '2020', '123');
        browser.sleep(2000);

        let successfulMessage = 'SUA COMPRA FOI EFETUADA COM SUCESSO!';
        expect($('.text .mx-2').getText()).toContain(successfulMessage);
    });

    xit('should have invalid credit card brand message', () => {
        let invalidCardBrandMessage = 'Cartão com bandeira inválida, confira o número e tente novamente!';
        expect($('.iziToast-capsule').getText()).toContain(invalidCardBrandMessage);
    });

    xit('should have recaptcha message', () => {
        let recaptchaMessage = 'Você deve comprovar que não é um robô';
        expect($('.iziToast-capsule').getText()).toContain(recaptchaMessage);
    });

    xit('should have unauthorized transaction', () => {
        let unauthorizedTransactionMessage = 'Transação não autorizada. Transação não permitida para o cartão.';
        expect($('.iziToast-capsule').getText()).toContain(unauthorizedTransactionMessage);
    });
});

describe ('New Checkout OPC with Billet Payment', () => {
    browser.manage().timeouts().implicitlyWait(5000);
    browser.driver.manage().window().maximize();

    it('try to submit personal data form and go to Payment tab', () => {
        Checkout.visit('https://payb.ticto.com.br/c/43E771ED');

        Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');

        let title = $('.steps-desktop .active p');
        expect(title.getText()).toContain('Pagamento')
    });

    it('try to buy with billet and go to Thank You page', () => {
        let billetTab = $('.payment-type .row div:first-child'),
            billetPaymentButton = $('.billet .col-12 button.shadow-sm.mb-4.btn-block');

        billetTab.click();
        billetPaymentButton.click();

        let successfulMessage = 'SUA COMPRA FOI EFETUADA COM SUCESSO!';
        expect($('.text .mx-2').getText()).toContain(successfulMessage);
    });

    xit('should have invalid credit card brand message', () => {
        let invalidCardBrandMessage = 'Cartão com bandeira inválida, confira o número e tente novamente!';
        expect($('.iziToast-capsule').getText()).toContain(invalidCardBrandMessage);
    });

    xit('should have recaptcha message', () => {
        let recaptchaMessage = 'Você deve comprovar que não é um robô';
        expect($('.iziToast-capsule').getText()).toContain(recaptchaMessage);
    });

    xit('should have unauthorized transaction', () => {
        let unauthorizedTransactionMessage = 'Transação não autorizada. Transação não permitida para o cartão.';
        expect($('.iziToast-capsule').getText()).toContain(unauthorizedTransactionMessage);
    });
});