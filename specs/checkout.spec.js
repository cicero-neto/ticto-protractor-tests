browser.waitForAngularEnabled(false);

let Checkout = require('../page-objects/checkout.po');

describe ('New Checkout', () => {
    browser.manage().timeouts().implicitlyWait(5000);
    browser.driver.manage().window().maximize();

    it('try to submit personal data form and go to Payment tab', () => {
        Checkout.visit('https://payb.ticto.com.br/c/43E771ED');

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
        $('.payment-type .row div:first-child').click();
        $('#personal-data > div > div > div > div.col-sm-12.col-lg-8.remove-padding.background-form.shadow.border-style > div > div:nth-child(4) > div > div > div.billet > div > div.col-12.col-md-6 > button').click()
        
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