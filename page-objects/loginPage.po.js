let LoginPage = function() {};

LoginPage.prototype.visit = () => {
    browser.get('http://app.ticto.com.br/login');
};

LoginPage.prototype.signIn = (email, password) => {
    let usernameField = $('input[name="email"]'),
        passwordField = $('input[name="password"]'),
        submitButton = $('.btn-primary.hidden-xs');

    usernameField.sendKeys(email);
    passwordField.sendKeys(password);
    submitButton.click();
}

module.exports = LoginPage;