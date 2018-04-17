describe('Protractor Demo App', function() {
    it('should have a title', function() {
 
      browser.get('http://juliemr.github.io/protractor-demo/');
      var urll = 'http://juliemr.github.io/protractor-demo/';
      var ptor;
      expect(browser.getTitle()).toEqual('Super Calculator');
      expect(browser.getCurrentUrl()).toContain('http://juliemr.github.io/protractor-demo/');
      browser.getCurrentUrl().then(function(data){
        console.log("Url running in the browser is :",data)
      });
      var titlePromise = browser.getTitle();
      titlePromise.then(function(text){
        console.log("1**************", text);
      });
      
    });
  });