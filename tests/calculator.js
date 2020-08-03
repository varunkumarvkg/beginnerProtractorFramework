let homepage = require('../pages/homepage')

describe('demo caluculator tests', function(){

    it('addition test', function(){

       // browser.get('http://juliemr.github.io/protractor-demo/');
       homepage.getUrl('http://juliemr.github.io/protractor-demo/');

       // element(by.model('first')).sendKeys('2'); 
       homepage.enterFirstNumber('5');

        //element(by.model('second')).sendKeys('7'); 
        homepage.enterSecondNumber('10');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

       //let result = element(by.cssContainingText('.ng-binding', '5'));
       //expect(result.getText()).toEqual('9');
       homepage.verifyResult('15');

        browser.sleep(2000);
    });

    it('subraction test', function(){

        // browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.getUrl('http://juliemr.github.io/protractor-demo/');
 
        // element(by.model('first')).sendKeys('2'); 
        homepage.enterFirstNumber('5');
 
         //element(by.model('second')).sendKeys('7'); 
         homepage.enterSecondNumber('10');
 
         //element(by.css('[ng-click="doAddition()"]')).click();
         homepage.clickGo();
 
        //let result = element(by.cssContainingText('.ng-binding', '5'));
        //expect(result.getText()).toEqual('9');
        homepage.verifyResult('10');
 
         browser.sleep(2000);
     });
});