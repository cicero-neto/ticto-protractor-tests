browser.waitForAngularEnabled(false);

let HomePage = require('../page-objects/homePage.po');

describe('Homepage Ticto', () => {
    it('should open a video', () => {
        let button = $('.text-center .img-fluid'),
            modal = $('#videoModalCenter');

        HomePage.visit();
        expect(button.isPresent()).toBe(true);

        button.click();

        expect(modal.isPresent()).toBe(true);
    });

    it('should open register modal', () => {
        let registerbutton = $('#navbarResponsive a[data-target="#modalRegister"]'),
            faturamento1 = $('#faturamento-1');

        HomePage.visit();

        expect(registerbutton.isPresent()).toBe(true);
        registerbutton.click();
        expect(faturamento1.isPresent()).toBe(true);

        browser.driver.sleep(3000);
    });

    it('try mark first option in first question', () => {
        let faturamento1 = $('#faturamento-1');

        expect(faturamento1.isSelected()).toBe(false);
        faturamento1.click();
        expect(faturamento1.isSelected()).toBe(true);
    });
});