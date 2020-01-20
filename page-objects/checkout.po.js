let Checkout = function() {};

Checkout.prototype.visit = (url) => {
    browser.get(url);
};

Checkout.prototype.personalDataForm = (name, email, phoneNumber, document) => {
    let nameField = $('#name-desktop'),
        emailField = $('#email-desktop'),
        phoneNumberField = $('#phone-desktop'),
        documentField = $('#document-desktop');

    nameField.sendKeys(name);
    emailField.sendKeys(email).sendKeys(protractor.Key.ENTER);
    phoneNumberField.sendKeys(phoneNumber);
    documentField.sendKeys(document);
}

Checkout.prototype.creditCardInfo = (cardNumber, holderName, month, year, cardSecurity) => {
    let cardNumberField = $('#cardnumber-desktop'),
        holderNameField = $('#holdername-desktop'),
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
        billetPaymentButton = $('#billet-submit-btn');

    billetTab.click();
    billetPaymentButton.click();
}

module.exports = new Checkout();