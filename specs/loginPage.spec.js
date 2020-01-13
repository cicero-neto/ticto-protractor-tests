browser.waitForAngularEnabled(false);

let login = browser.params.login;
let LoginPage = require('../page-objects/loginPage.po');

describe('Login App Ticto', () => {
    browser.manage().timeouts().implicitlyWait(5000);

    it('should password message error', () => {
        let loginPage = new LoginPage();

        let email = login.user,
            password = login.password,
            text = 'O campo senha é obrigatório.',
            passwordError = $('.validation-message .error');

        loginPage.visit();

        loginPage.signIn(email, password = '');

        expect(passwordError.isPresent()).toBe(true);
        expect(passwordError.getText()).toContain(text);
    });

    it('should email message error', () => {
        let loginPage = new LoginPage();

        let email = login.user,
            password = login.password,
            text = 'O campo E-mail é obrigatório.',
            emailError = $('.validation-message .error');

        loginPage.visit();

        loginPage.signIn(email = '', password);

        expect(emailError.isPresent()).toBe(true);
        expect(emailError.getText()).toContain(text);
    });

    it('should email or password message error', () => {
        let loginPage = new LoginPage();

        let email = login.user,
            password = login.password,
            text = 'Email ou senha incorretos.',
            emailError = $('.validation-message .error');

        loginPage.visit();
        loginPage.signIn(email, password = 'password123');

        expect(emailError.isPresent()).toBe(true);
        expect(emailError.getText()).toContain(text);
    });

    it('should login app', () => {
        let loginPage = new LoginPage();

        let email = login.user,
            password = login.password;

        loginPage.visit();

        loginPage.signIn(email, password);
        browser.driver.sleep(3000);

        expect($('.profile-picture').isPresent()).toBe(true);
    });

    it('should logout app', () => {
        $('#userbox .fa.custom-caret').click();
        browser.driver.sleep(3000);

        $('#userbox > div > ul > li:nth-child(4) a').click();

        expect($('.panel-title-sign .title').getText()).toContain('LOGIN');
    });
});

