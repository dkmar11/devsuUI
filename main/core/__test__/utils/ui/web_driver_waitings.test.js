const { By } = require('selenium-webdriver')
const { describe, it, expect } = require('@jest/globals');
const WebDriverActions = require("../../../utils/ui/web_driver_actions");
const WebDriverWaitings = require("../../../utils/ui/web_driver_waitings");
const driver_manager = require('../../../../core/selenium/driver_manager');

describe('testing the WebDriverWaitings class', () => {
  const baseURL = "http://uitestingplayground.com/";
  let result;

  it('should be able to get a browser', async() => {
    await driver_manager.init("EDGE");
    await WebDriverActions.navigateTo(baseURL);
    expect(await WebDriverActions.driver.getCurrentUrl()).toBe(baseURL);
    expect(driver_manager.sessionExists).toBe(true);
  });

  it('it should confirm the correct functionality of the elementIsLocated method', async() => {
    try {
      let loadDelayElement = By.xpath("//div[@class='col-sm']//a[contains(., 'Load Delay')]");
      await WebDriverWaitings.elementIsLocated(loadDelayElement);
      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).toBe(true);
  });

  it('should be able to quit the browser', async() => {
    await driver_manager.close();
    expect(driver_manager.sessionExists).toBe(false);
  });
});