// conf.js

exports.config = {
    directConnect: true,
    specs: ['specs/*.spec.js'],
    params: {
        login: {
            'user': '',
            'password': ''
        }
    },
    suites: {
        login: 'specs/loginPage.spec.js',
        checkout: 'specs/checkout.spec.js',
        home: 'specs/homePage.spec.js'
    },
    onPrepare: function () {
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            takeScreenshots: true,
            fixedScreenshotName: true,
            savePath: './test/reports/',
            screenshotsFolder: 'images'
        }));
    }
}