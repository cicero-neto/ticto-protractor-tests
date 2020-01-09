browser.waitForAngularEnabled(false);

let Checkout = require('../page-objects/checkout.po');

describe ('New Checkout', () => {
    browser.manage().timeouts().implicitlyWait(5000);
    browser.driver.manage().window().maximize();

    it('try to submit personal data form and go to Payment tab', () => {
        Checkout.visit('https://payb.ticto.com.br/c/43E771ED');

        Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');

        let title = $('#personal-data > div > div > div > div.col-sm-12.col-lg-8.remove-padding.background-form.shadow.border-style > div > div:nth-child(4) > div > div > div:nth-child(1) > div > h3')

        expect(title.getText()).toContain('Pagamento')
    });

    it('try to input and submit credit card info', () => {
        Checkout.creditCardInfo('4484 8484 8484 8481', 'John Doe', '04', '2020', '123');
        browser.sleep(2000);
    });

    it('should have invalid credit card brand message', () => {
        let invalidCardBrandMessage = 'Cartão com bandeira inválida, confira o número e tente novamente!'
        expect($('.iziToast-capsule').getText()).toContain(invalidCardBrandMessage)
    });

    it('should have recaptcha message', () => {
        let recaptchaMessage = 'Você deve comprovar que não é um robô'
        expect($('.iziToast-capsule').getText()).toContain(recaptchaMessage)
    });

    it('should have unauthorized transaction', () => {
        let recaptchaMessage = 'Transação não autorizada. Transação não permitida para o cartão.'
        expect($('.iziToast-capsule').getText()).toContain(recaptchaMessage)
    });

    it('should have successful message', () => {
        let successfulMessage = 'Sua Compra foi efetuada com sucesso!'
        expect($('.text .mx-2').getText()).toContain(successfulMessage)
    });
});

