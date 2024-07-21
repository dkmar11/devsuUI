const { By } = require("selenium-webdriver");
const WebDriverActions = require("../../core/utils/ui/web_driver_actions");

/**
 * class to work with checkout step one page
 */
class CheckoutOnePage {
  /**
   * Constructor of the class where the selector are declared
   */
  constructor() {
    this.firstNameInput = By.css("input[data-test='firstName']");
    this.lastNameInput = By.css("input[data-test='lastName']");
    this.postalCodeInput = By.css("input[data-test='postalCode']");
    this.continueButton = By.css("input[data-test='continue']");
  }
  /**
   * Method to fill up the form
   * @param {Object} personalInformation - Object with the personal information
   * @param {string} personalInformation.firstName - First name
   * @param {string} personalInformation.lastName - Last name
   * @param {string} personalInformation.postalCode - Postal code
   */
  async fillUpForm(personalInformation) {
    await WebDriverActions.sendKeys(this.firstNameInput, personalInformation.firstName);
    await WebDriverActions.sendKeys(this.lastNameInput, personalInformation.lastName);
    await WebDriverActions.sendKeys(this.postalCodeInput, personalInformation.postalCode);
  }

}

module.exports = new CheckoutOnePage();