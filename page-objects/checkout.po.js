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

module.exports = new Checkout();