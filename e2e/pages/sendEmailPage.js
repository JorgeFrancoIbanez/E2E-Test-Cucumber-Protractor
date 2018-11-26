module.exports = {
    init: () => {
        browser.waitForAngularEnabled(false);
        composeButton = element(by.css('div[gh="cm"]'));
        inputTo = element(by.name('to'));
        inputSubject = element(by.name('subjectbox'));
        inputMessage = element(by.css('div[class="Am Al editable LW-avf"]'));
        inputSendMessage = element(by.css('td[class="gU Up"]'));
        cc = element(by.css('span[class="aB gQ pE"]'));
        bcc = element(by.css('span[class="aB  gQ pB"]'));
        inputCC = element(by.name('cc'));
        inputBCC = element(by.name('bcc'));
        toast = element(by.id('link_vsm'));
        toastUndo = element(by.id('link_undo'));
        mail = element(by.css('span[name="qervytest e2e"]'));
        inbox = element(by.css('div[class="TN bzz aHS-bnt"]'));
        listMail = element.all(by.css('div[class="oZ-jc T-Jo J-J5-Ji "]'));
        deleteButton = element.all(by.css(`div[class="ar9 T-I-J3 J-J5-Ji"]`));
        principalTab = element(by.css('div[class="aAy J-KU-KO aIf-aLe"]'));
    },
    clickBCC: () => {
        return bcc.click();
    },
    clickComposeButton: () => {
        return composeButton.click();
    },
    clickCC: () => {
        return cc.click();
    },
    clickDelete: () => {
        deleteButton.then(function(list){
            list[2].click()
        });
    },
    clickFirst: () => {
        listMail.then(function(list){
            list[0].click();
        });
    },
    clickInbox: () => {
        return inbox.click();
    },
    clickInputSendMessage: () => {
        return inputSendMessage.click();
    },
    clickInputTo: () => {
        return inputTo.click();
    },
    clickToast: () => {
        return toast.click();
    },
    getComposeButton: () => {
        return composeButton;
    },
    getInputTo: () => {
        return inputTo;
    },
    getPrincipalTab: () => {
        return principalTab;
    },
    getToast: () => {
        return toast;
    },
    getToastUndo: () => {
        return toastUndo;
    },
    getMail: () => {
        return mail;
    },
    setReceiver: (email) => {
        return inputTo.sendKeys(email);
    },
    setSubject: (subject) => {
        return inputTo.sendKeys(subject);
    },
    setMessage: (message) => {
        return inputMessage.sendKeys(message);
    },
    setInputCC: (email) => {
        return inputCC.sendKeys(email);
    },
    setInputBCC: (email) => {
        return inputBCC.sendKeys(email);
    },
}