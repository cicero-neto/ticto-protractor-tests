// conf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/*.spec.js'],
    params: {
        login: {
            'user': '',
            'password': ''
        }
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
            fixedScreenshotName: true
        }));
    }
}