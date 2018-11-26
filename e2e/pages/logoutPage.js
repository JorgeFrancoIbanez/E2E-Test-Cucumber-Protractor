module.exports = {
    init: () => {
        browser.waitForAngularEnabled(false);
        uperUserButton = element(by.xpath('//*[@id="gb"]/div[2]/div[3]/div/div[2]/div/a/span'));
        userLogout= element(by.id('gb_71'));
    },
    clickUperUserButton: () => {
        return uperUserButton.click();
    },
    clickUserLogout: () => {
        return userLogout.click();
    },
    getLogoutButton: () => {
        return userLogout;
    },
    getPasswordField: () => {
        return userPassword;
    },
    getUserButton: () => {
        return uperUserButton;
    }
}