const {describe, expect} = require('@jest/globals');
const WebDriverGettings = require('../../../utils/ui/web_driver_gettings');
const driver_manager = require('../../../selenium/driver_manager');
const { By }  = require("selenium-webdriver");

describe('testing WebDriverGettings class', () => {
  it('should be able to get browser', async () => {
    const URL =  "http://uitestingplayground.com/";
    await driver_manager.init('EDGE');
    await WebDriverGettings.driver.get(URL);
  });

  it('should be able to get a text from an element', async () => {
    await WebDriverGettings.driver.get('http://uitestingplayground.com/verifytext');
    const text = await WebDriverGettings.getText(By.xpath("//span[normalize-space(.)='Welcome UserName!']"))
    expect(text).toBe('Welcome UserName!');
  });
  
  it("should be able to quit the browser", async () => {
    await driver_manager.close();
    expect(driver_manager.sessionExists).toBe(false);
  });
});