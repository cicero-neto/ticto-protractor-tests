let Checkout = function() {};

Checkout.prototype.visit = (url) => {
    browser.get(url);
};

Checkout.prototype.personalDataForm = (name, email, phoneNumber, document) => {
    let nameField = $('input[name="name"]'),
        emailField = $('#email'),
        phoneNumberField = $('input[name="phoneNumber"]'),
        documentField = $('#personal-data > div > div > div > div.col-sm-12.col-lg-8.remove-padding.background-form.shadow.border-style > div > div:nth-child(3) > div > div > div:nth-child(4) > div > div:nth-child(7) > div > input');
        submitButton = $('#personal-data > div > div > div > div.col-sm-12.col-lg-8.remove-padding.background-form.shadow.border-style > div > div:nth-child(3) > div > div > div:nth-child(4) > div > div.col-12.col-md-6.mb-2.offset-md-6 > button');

    nameField.sendKeys(name);
    emailField.sendKeys(email);
    $('#autocomplete-results li:first-child').click()
    phoneNumberField.sendKeys(phoneNumber);
    documentField.sendKeys(document);
    browser.driver.sleep(2000);
    submitButton.click();
}

Checkout.prototype.creditCardInfo = (cardNumber, holderName, month, year, cardSecurity) => {
    let cardNumberField = $('#cardNumber');
    let holderNameField = $('input[name="holderName"]');
    let monthField = element(by.tagName("select#month"));
    let yearField = element(by.tagName("select#year"));
    let cardSecurityField = $('#cardSecurity');

    let submitButton = $('#personal-data > div > div > div > div.col-sm-12.col-lg-8.remove-padding.background-form.shadow.border-style > div > div:nth-child(4) > div > div > div.credit-card > div > div:nth-child(5) > button > span');

    cardNumberField.sendKeys(cardNumber);
    holderNameField.sendKeys(holderName);
    monthField.click();
    browser.driver.sleep(2000);
    element(by.css("#month [value='03']")).click();
    yearField.click();
    browser.sleep(1000)
    element(by.css("#year [value='2020']")).click();
    cardSecurityField.sendKeys(cardSecurity);

    submitButton.click();
}

module.exports = new Checkout();