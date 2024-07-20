const WebDriverActions = require('../../../utils/ui/web_driver_actions');
const WebDriverConditions = require('../../../utils/ui/web_driver_conditions');
const { By } = require('selenium-webdriver');
const DriverManager = require('../../../selenium/driver_manager');
const driver_manager = require('../../../selenium/driver_manager');


describe('WebDriverActions', () => {
  const baseURL = "http://uitestingplayground.com";
  let result;
  describe('navigateTo', () => {
    it('should navigate to the specified URL', async () => {
      await DriverManager.init('EDGE');
      await WebDriverActions.navigateTo(baseURL);
    });
  });

  describe('clickOnElement', () => {
    it('should click on the specified element', async () => {
      const testElement = By.css(`a[href='/textinput']`);
      const resultElement = By.css(`input.form-control[type='text']`);
      await WebDriverActions.clickOnElement(testElement);
      const isElementVisible = await WebDriverConditions.elementIsVisible(resultElement);
      expect(isElementVisible).toBe(true);
    });
  });

  describe('sendKeys', () => {
    it('should send keys to the specified element after clearing it', async () => {
      const testElement = By.css('#newButtonName');
      const value = "test";
      try {
        await WebDriverActions.sendKeys(testElement , value);
        result = true;
      } catch (error) {
        result = false;
      }
      expect(result).toBe(true);
    });
  });

  it("should be able to quit the browser", async () => {
    await driver_manager.close();
    expect(driver_manager.sessionExists).toBe(false);
  });
});
