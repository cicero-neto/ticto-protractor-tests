browser.waitForAngularEnabled(false);

let Checkout = require('../page-objects/checkout.po');

describe('New Checkout', () => {
    browser.manage().timeouts().implicitlyWait(5000);
    browser.driver.manage().window().maximize();

    describe('With Billet Payment', () => {
        it('try to submit personal data form and go to Payment tab', () => {
            Checkout.visit('http://dev.pay2.ticto.com.br/c/A1BF8076');

            let title = $('.steps-desktop .active p');
            let submitPersonalDataButton = $('#validate-personal-btn');

            expect(title.getText()).toContain('Dados');

            Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');
            submitPersonalDataButton.click();

            expect(title.getText()).toContain('Pagamento');
        });

        it('try to buy with billet and go to Thank You page', () => {
            Checkout.billetTab();

            let successfulMessage = 'SUA COMPRA FOI EFETUADA COM SUCESSO!';
            expect($('.text .mx-2').getText()).toContain(successfulMessage);
        });
    });

    describe('With Credit Card Payment', () => {
        describe('with unauthorized transaction message', () => {
            it('try to submit personal data form and go to Payment tab', () => {
                Checkout.visit('http://dev.pay2.ticto.com.br/c/A1BF8076');
    
                let title = $('.steps-desktop .active p');
                let submitPersonalDataButton = $('#validate-personal-btn');
    
                expect(title.getText()).toContain('Dados');
    
                Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');
                submitPersonalDataButton.click();
    
                expect(title.getText()).toContain('Pagamento');
            });
    
            it('try to input and submit credit card info', () => {
                Checkout.creditCardInfo('4484 8484 8484 8481', 'John Doe', '04', '2020', '123');
                browser.sleep(2000);
            });
    
            it('should have unauthorized transaction', () => {
                let unauthorizedTransactionMessage = 'Transação não autorizada. Oriente o portador a entrar em contato com o banco emissor';
                browser.sleep(2000);
                expect($('.iziToast-wrapper .iziToast-capsule').getText()).toContain(unauthorizedTransactionMessage)
            });
        });

        describe('with invalid credit card brand message', () => {
            it('try to submit personal data form and go to Payment tab', () => {
                Checkout.visit('http://dev.pay2.ticto.com.br/c/A1BF8076');
    
                let title = $('.steps-desktop .active p');
                let submitPersonalDataButton = $('#validate-personal-btn');
    
                expect(title.getText()).toContain('Dados');
    
                Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');
                submitPersonalDataButton.click();
    
                expect(title.getText()).toContain('Pagamento');
            });
    
            it('try to input and submit credit card info', () => {
                Checkout.creditCardInfo('1484 8484 8484 8481', 'John Doe', '04', '2020', '123');
                browser.sleep(2000);
            });

            it('should have invalid credit card brand message', () => {
                let invalidCardBrandMessage = 'Cartão com bandeira inválida, confira o número e tente novamente!';
                browser.sleep(2000);
                expect($('.iziToast-wrapper .iziToast-capsule').getText()).toContain(invalidCardBrandMessage);
            });
        });
    });

    // describe ('One Page Checkout with Credit Card Payment', () => {
    //     it('try to fill personal data form and go to Payment section', () => {
    //         Checkout.visit('https://payb.ticto.com.br/c/43E771ED');
    
    //         Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');
    //     });

    //     it('try to input and submit credit card info and go to Thank You page', () => {
    //         Checkout.creditCardInfo('4484 8484 8484 8481', 'John Doe', '04', '2020', '123');
    //         browser.sleep(2000);

    //         let error = $('.invalid-feedback');
    //         expect(error.isPresent()).toBe(true);

    //         let successfulMessage = 'SUA COMPRA FOI EFETUADA COM SUCESSO!';
    //         expect($('.text .mx-2').getText()).toContain(successfulMessage);
    //     });
    // });

    // describe ('One Page Checkout with Billet Payment', () => {
    //     it('try to fill personal data form and go to Payment section', () => {
    //         Checkout.visit('https://payb.ticto.com.br/c/43E771ED');

    //         let error = $('.invalid-feedback');
    
    //         Checkout.personalDataForm('Cicero Neto', 'cicero.testeux@gmail.com', '12345678900', '01234567890');
    //         expect(error.isPresent()).toBe(false);
    
    //         // expect(title.getText()).toContain('Pagamento')
    //     });

    //     it('try to input and submit billet info and go to Thank You page', () => {
    //         Checkout.billetTab();

    //         let successfulMessage = 'SUA COMPRA FOI EFETUADA COM SUCESSO!';
    //         expect($('.text .mx-2').getText()).toContain(successfulMessage);
    //     });
    // });
});