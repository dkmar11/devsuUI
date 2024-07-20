const { By } = require("selenium-webdriver");
const configuration_manager = require("../../core/utils/configuration_manager");
const WebDriverActions = require("../../core/utils/ui/web_driver_actions");

/**
 * class to work with login page
 */
class LoginPage {
  /**
   * Constructor of the class where the selector are declared
   */
  constructor() {
    this.userInput = By.css("input[data-test='username']");
    this.passwordInput = By.css("input[data-test='password']");
    this.loginButton = By.css("input[data-test='login-button']");
  }
  /**
   * Method to login to the application
   * @param {String} userName - user name to login
   * Note: the password is going to be taken from the environment.json file
   * @example
   * await loginPage.login("standard_user");
   */
  async login(userName) {
    const pass = configuration_manager.environment.users[userName].password;
    await WebDriverActions.sendKeys(this.userInput, userName);
    await WebDriverActions.sendKeys(this.passwordInput, pass);
    await WebDriverActions.clickOnElement(this.loginButton);
  }
}

module.exports = new LoginPage();