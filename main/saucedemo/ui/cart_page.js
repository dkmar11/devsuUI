const logger = require("../../core/utils/logger");
const webDriverGettings = require("../../core/utils/ui/web_driver_gettings");
const { By } = require("selenium-webdriver");

/**
 * class to work with inventory page
 */
class CartPage {
  /**
   * Constructor of the class where the selector are declared
   * @CAUTION this selector can select more than 1 element:
   * itemName, itemDescription, itemPrice
   */
  constructor() {
    this.itemName = By.css("div[data-test='inventory-item-name']");
    this.itemDescription = By.css("div[data-test='inventory-item-desc']");
    this.itemPrice = By.css("div[data-test='inventory-item-price']");
    this.checkoutButton = By.css("button[data-test='checkout']");
  }
  /**
   * method to get all the products from the cart
   * @returns {Promise<Array>} array of objects with the product information
   * @example
   * [
   *  {
   *    name: 'Sauce Labs Backpack',
   *    description: 'streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
   *    price: '$29.99'
   *  },
   *  {
   *    name: 'Sauce Labs Bike Light',
   *    description: 'A red light isn\'t what you need for your bike!',
   *    price: '$9.99'
   *  }
   * ]
   */
  async getProductsFromTheCart() {
    const names = await webDriverGettings.getAllTextFromElements(this.itemName)
    const descriptions = await webDriverGettings.getAllTextFromElements(this.itemDescription)
    const prices = await webDriverGettings.getAllTextFromElements(this.itemPrice)
    const products = []
    for (let i = 0; i < names.length; i++) {
      products.push({
        name: names[i],
        description: descriptions[i],
        price: prices[i]
      })
    }
    logger.info(`Products from the cart: ${JSON.stringify(products)}`)
    return products
  }

}

module.exports = new CartPage();