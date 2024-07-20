const driver_manager = require('../../selenium/driver_manager');
const logger = require('../../utils/logger');
const WebDriverWaitings = require('./web_driver_waitings');

/**
 * Class to do actions on selenium web driver
 */
class WebDriverActions {
  /**
   * Getter for active driver to perform actions
   */
  static get driver() {
    return driver_manager.driver;
  }
  /**
   * static and asynchronous method to get a page on browser
   * @param {String} url  - URL to be navigated
   */
  static async navigateTo(url) {
    logger.info(`Navigated to ${url}`);
    await this.driver.get(url);
  }
  /**
   * static and asynchronous method to click on element
   * note: this method waits for element to be located and enable
   * @param {By} element - selector to be clicked
   */
  static async clickOnElement(element) {
    await WebDriverWaitings.elementIsLocated(element)
    await this.driver.findElement(element).click();
  }
  /**
   * static and asynchronous method to send keys on element
   * note: this method waits for element to be located and enable
   * @param {By} element - selector to send keys
   * @param {String} value - value to be entered
   */
  static async sendKeys(element, value) {
    await WebDriverWaitings.elementIsLocated(element)
    await this.driver.findElement(element).clear();
    await this.driver.findElement(element).sendKeys(value);
  }
  /**
   * static and asynchronous method to take a screenshot of the current page
   */
  static async takeScreenshot() {
    try {
      const screenshot = await this.driver.takeScreenshot();
      logger.info(`Screenshot taken`);
      return screenshot;
    } catch (error) {
      logger.error('Error while taking screenshot:', error);
    }
  }
  /**
   * The closeWindow function is used to quit the driver and close the current window.
   */
  static async closeWindow(){
    this.driver.quit();
  }
}

module.exports = WebDriverActions;