let logoutSpecPage = require('../pages/logoutPage.js');

let chai = require('chai');
let protractor = require('protractor')
let EC = protractor.ExpectedConditions;
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

Before(function(){
    logoutSpecPage.init();
})

When('The user {string} remain loged in', {timeout: 30 * 1000}, async function (userName) {
    await browser.wait(EC.titleContains(userName), 20000, "wait for inbox");
    await browser.wait(EC.visibilityOf(logoutSpecPage.getUserButton()), 20000);
    await logoutSpecPage.clickUperUserButton()
});

Then('Attempt to log out from inbox', {timeout: 30 * 1000}, async function () {
    await logoutSpecPage.clickUserLogout()
    await expect(browser.wait(EC.visibilityOf(logoutSpecPage.getPasswordField()), 15000)).to.eventually.equal(true);        
});