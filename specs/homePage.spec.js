browser.waitForAngularEnabled(false);

let HomePage = require('../page-objects/homePage.po');

describe ('Homepage Ticto', () => {
    it('should open a video', () => {
        let button = $('.text-center .img-fluid'),
            modal = $('#videoModalCenter');

        HomePage.visit();
        expect(button.isPresent()).toBe(true);
        
        button.click();

        expect(modal.isPresent()).toBe(true);
    });

    it('should open register modal', () => {
        let registerbutton = $('.btn-yellow'),
            faturamento1 = $('#faturamento-1');
        
        HomePage.visit();
        expect(registerbutton.isPresent()).toBe(true);

        registerbutton.click();

        expect(faturamento1.isPresent()).toBe(true);
    });
});