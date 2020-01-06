browser.waitForAngularEnabled(false);

describe ('Ticto', () => {
    it('should open a video', () => {
        let button = $('.text-center .img-fluid');
        let modal = $('#videoModalCenter');
        let closemodal = $('#videoModalCenter .close')

        browser.get('http://www.ticto.com.br').then(() => {
            expect(button.isPresent()).toBe(true);

            button.click();

            expect(modal.isPresent()).toBe(true);
            expect(closemodal.isPresent()).toBe(true);
        })
    });

    it('should open register modal', () => {
        let registerbutton = $('.btn-yellow');
        let faturamento1 = $('#faturamento-1')

        browser.get('http://www.ticto.com.br').then(() => {
            expect(registerbutton.isPresent()).not.toBe(true);

            registerbutton.click();

            expect(faturamento1.isPresent()).toBe(true);
        })
    });
});