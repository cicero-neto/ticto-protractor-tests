let HomePage = function() {};

HomePage.prototype.visit = function() {
    browser.get('http://www.ticto.com.br');
};

module.exports = new HomePage();