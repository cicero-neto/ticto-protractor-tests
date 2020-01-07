// conf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/checkout.spec.js'],
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
            savePath: './test/reports/checkout',
            screenshotsFolder: 'images'
        }));
    }
}