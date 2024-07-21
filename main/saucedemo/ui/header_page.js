const { By } = require("selenium-webdriver");

/**
 * class to work with header page
 */
class HeaderPage {
  /**
   * Constructor of the class where the selector are declared
   */
  constructor() {
    this.cartButton = By.css("a[data-test='shopping-cart-link']");
  }
}

module.exports = new HeaderPage();