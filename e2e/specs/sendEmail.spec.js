let sendEmailSpecPage = require('../pages/sendEmailPage.js');

let chai = require('chai');
let protractor = require('protractor')
let EC = protractor.ExpectedConditions;
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

Before(function(){
    sendEmailSpecPage.init();
})

When('The user {string} remain loged in', {timeout: 20 * 1000}, async function (userName) {
    await expect(browser.wait(EC.titleContains(userName), 20000, "wait for inbox"), 20000).to.eventually.equal(true);
});

Then('User press new button message', async function () {
    await sendEmailSpecPage.clickComposeButton();
    await browser.wait(EC.visibilityOf(sendEmailSpecPage.getInputTo()), 5000);
});

Then('User writes a message to {string}', {timeout: 3 * 1000}, async function (username) {
    let email=username+'@gmail.com'
    await sendEmailSpecPage.setReceiver(email);
    await sendEmailSpecPage.clickCC();
    await sendEmailSpecPage.setInputCC(email);
    await sendEmailSpecPage.clickBCC();
    await sendEmailSpecPage.setInputBCC(email);
    await sendEmailSpecPage.setMessage('This is a message');
});


Then('User send message', {timeout: 15 * 1000}, async function () {
    await sendEmailSpecPage.clickInputSendMessage()
    await expect(browser.wait(EC.invisibilityOf(sendEmailSpecPage.getInputTo()), 15000)).to.eventually.equal(true);
});

Then('Verify email reception', {timeout: 10 * 1000}, async function () {
    await expect(browser.wait(EC.visibilityOf(sendEmailSpecPage.getToast()), 10000)).to.eventually.equal(true);
    await sendEmailSpecPage.clickToast();
    await expect(browser.wait(EC.visibilityOf(sendEmailSpecPage.getMail()), 10000)).to.eventually.equal(true);
});


Then('Delete first mail from inbox', {timeout: 10 * 1000}, async function () {
    await sendEmailSpecPage.clickInbox();
    await expect(browser.wait(EC.visibilityOf(sendEmailSpecPage.getPrincipalTab()), 10000)).to.eventually.equal(true);
    await sendEmailSpecPage.clickFirst();
    // await sendEmailSpecPage.clickDelete();
    // await expect(browser.wait(EC.visibilityOf(sendEmailSpecPage.getToastUndo()), 10000)).to.eventually.equal(true);
    await expect(browser.wait(EC.visibilityOf(sendEmailSpecPage.getPrincipalTab()), 10000)).to.eventually.equal(true);
});