const { By } = require("selenium-webdriver");

/**
 * class to work with checkout step two page
 */
class CheckoutTwoPage {
  /**
   * Constructor of the class where the selector are declared
   */
  constructor() {
    this.finishButton = By.css("button[data-test='finish']");
  }
}

module.exports = new CheckoutTwoPage();