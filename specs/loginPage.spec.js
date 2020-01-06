browser.waitForAngularEnabled(false);

let login = browser.params.login;
let LoginPage = require('../page-objects/loginPage.po');

describe ('Login App Ticto', () => {

    it('should login app', () => {
        let loginPage = new LoginPage();
        
        let email = login.user, 
            password = login.password;

        loginPage.visit();

        browser.driver.sleep(3000);
        loginPage.signIn(email, password);
        browser.driver.sleep(3000);

        expect($('.profile-picture').isPresent()).toBe(true);
    });
});

