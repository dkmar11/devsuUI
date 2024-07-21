const driver_manager = require("../../selenium/driver_manager");
const logger = require("../logger");
const WebDriverWaitings = require("./web_driver_waitings");

/**
 * Class to get elements from selenium web driver
 */
class WebDriverGettings {
  /**
   * Getter for active driver to perform actions
   */
  static get driver() {
    return driver_manager.driver;
  }

  /**
   * Static and asynchronous method to get the text from all elements that match the given selector.
   * @param {By} element - The selector used to locate the elements.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of strings, each representing the text of a matched element.
   */
  static async getAllTextFromElements(element) {
    const elements = await this.driver.findElements(element);
    const texts = [];
    for (const el of elements) {
      const text = await el.getText();
      texts.push(text);
    }
    return texts;
  }

  /**
   * static and asynchronous method to get a text on a element
   * @param {By} element - selector to get a text
   * @returns {string} - text of the element
   */
  static async getText(element) {
    await WebDriverWaitings.elementIsLocated(element)
    const text = await this.driver.findElement(element).getText();
    logger.info(`text of the ${element} is: \n${text}`)
    return text;
  }
}

module.exports = WebDriverGettings;
