const WebDriverActions = require("../../core/utils/ui/web_driver_actions");
const { By } = require("selenium-webdriver");

/**
 * class to work with inventory page
 */
class InventoryPage {
  /**
   * Constructor of the class where the selector are declared
   */
  constructor() {
  }
  /**
   * method to get the xpath selector of the add to cart button by product name
   * @param {String} name - name of the Product
   * @returns {String} - xpath of add to cart button
   * @example
   * this.addToCartButtonByName("Sauce Labs Backpack");
   */
  addToCartButtonByName(name){
    return By.xpath(`//div[@data-test="inventory-item"][descendant::*[contains(text(), "${name}")]]//*[contains(@data-test,"add-to-cart")]`)
  }
  /**
   * Method to select an Product by name from the inventory
   * @param {String} name - name of the Product
   * @example
   * inventoryPage.selectProductByName("standard_user");
   */
  async selectProductByName(name) {
    await WebDriverActions.clickOnElement(this.addToCartButtonByName(name));
  }
}

module.exports = new InventoryPage();