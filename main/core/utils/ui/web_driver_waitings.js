const { until } = require('selenium-webdriver')
const logger = require('../../utils/logger');
const driver_manager = require('../../selenium/driver_manager');
const configuration_manager = require('../configuration_manager');
/**
 * Class for waitings in selenium web driver
 */
class WebDriverWaitings {
  /**
   * Getter for active driver to perform actions
   */
  static get driver() {
    return driver_manager.driver
  }
  /**
   * static and asynchronous method for waiting for an element to be Located and Enabled
   * note:
   * 1.-this method use until.elementLocated, until.elementIsEnabled and visible to wait the element
   * 2.-timeout is set in configuration file (configuration.js)
   * @param {By} element - element to wait for
   */
  static async elementIsLocated(element) {
    const timeout = configuration_manager.setUp.timeout;
    logger.info(`Waiting for element ${element} to be located`);
    await this.driver.wait(until.elementLocated(element), timeout);
    await this.driver.wait(until.elementIsVisible(this.driver.findElement(element)), timeout);
    await this.driver.wait(until.elementIsEnabled(this.driver.findElement(element)), timeout);
  }
}

module.exports = WebDriverWaitings;
