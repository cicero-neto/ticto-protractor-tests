let Checkout = function() {};

Checkout.prototype.visit = (url) => {
    browser.get(url);
};

Checkout.prototype.personalDataForm = (name, email, phoneNumber, document) => {
    let nameField = $('input[name="name"]'),
        emailField = $('#email'),
        phoneNumberField = $('input[name="phoneNumber"]'),
        documentField = $('.col-md-6 input[name="documentNumber"]');

    nameField.sendKeys(name);
    emailField.sendKeys(email).sendKeys(protractor.Key.ENTER);
    phoneNumberField.sendKeys(phoneNumber);
    documentField.sendKeys(document);
}

Checkout.prototype.creditCardInfo = (cardNumber, holderName, month, year, cardSecurity) => {
    let cardNumberField = $('#cardNumber'),
        holderNameField = $('input[name="holderName"]'),
        monthField = element(by.tagName("select#month")),
        yearField = element(by.tagName("select#year")),
        cardSecurityField = $('#cardSecurity'),
        submitButton = $('.credit-card button');
    
    cardNumberField.sendKeys(cardNumber);
    holderNameField.sendKeys(holderName);
    monthField.click();
    element(by.css("#month [value='" + month + "']")).click();
    yearField.click();
    element(by.css("#year [value='" + year + "']")).click();
    cardSecurityField.sendKeys(cardSecurity);

    submitButton.click();
}

Checkout.prototype.billetTab = () => {
    let billetTab = $('.payment-type .row div:first-child'),
        billetPaymentButton = $('.billet .col-12 button');

        billetTab.click();
        billetPaymentButton.click();
}

module.exports = new Checkout();