let nameInput,
  greeting;

module.exports = {
  init: () => {
    browser.waitForAngularEnabled(false);
    userName = element(by.id('identifierId'));
    nextButton = element(by.id('identifierNext'));
    userPassword = element(by.name("password"));
    passwordNextButton = element(by.id('passwordNext'));
    uperUserButton = element(by.xpath('//*[@id="gb"]/div[2]/div[3]/div/div[2]/div/a/span'));
    userLogout= element(by.id('gb_71'));
  },
  get: (string) => {
    return browser.get(string);
  },
  clickNext: () => {
    return nextButton.click();
  },
  clickUperUserButton: () => {
    return uperUserButton.click();
  },
  clickUserLogout: () => {
    return userLogout.click();
  },
  clickPasswordNext: () => {
    return passwordNextButton.click();
  },
  get: (string) => {
    return browser.get(string);
  },
  getelem: () => {
    return eleme;
  },
  getLogoutButton: () => {
    return userLogout;
  },
  getPasswordField: () => {
    return userPassword;
  },
  getUserNameField: () => {
    return userName;
  },
  getUserButton: () => {
    return uperUserButton;
  },
  setUserName: (user) => {
    return userName.sendKeys(user);
  },
  setPassword: (password) => {
    return userPassword.sendKeys(password);
  },
  getGreetingText: () => {
    return greeting.getText();
  }
}