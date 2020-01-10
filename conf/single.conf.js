exports.config = {
  'specs': ['../specs/single.js'],
  'browserstackUser': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  'browserstackKey': process.env.BROWSERqSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  'capabilities': {
    'build': 'protractor-browserstack',
    'name': 'single_test',
    'browserName': 'chrome',
    'resolution': '1024x768',
    'browserstack.debug': 'true'
  },

  suites: {
    login: '../specs/loginPage.spec.js',
    checkout: '../specs/checkout.spec.js',
    home: '../specs/homePage.spec.js'
  },
};
