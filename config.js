exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['loginspec.js'],
     onPrepare: function() {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
     }
  }
