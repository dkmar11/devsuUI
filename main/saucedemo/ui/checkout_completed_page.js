const { By } = require("selenium-webdriver");
const WebDriverGettings = require("../../core/utils/ui/web_driver_gettings");

/**
 * class to work with checkout step completed page
 */
class CheckoutCompletedPage {
  /**
   * Constructor of the class where the selector are declared
   */
  constructor() {
    this.completedMessage = By.css("h2[data-test='complete-header']");
  }

  /**
   * Method to get the final message from checkout completed page
   * @returns {Promise<string>} the completed message
   */
  async getCompletedMessage() {
    return await WebDriverGettings.getText(this.completedMessage);
  }
}

module.exports = new CheckoutCompletedPage();