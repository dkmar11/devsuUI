const { Before, After, AfterAll, Status } = require('@cucumber/cucumber');
const logger = require('../../../main/core/utils/logger');
const driver_manager = require('../../../main/core/selenium/driver_manager');
const WebDriverActions = require('../../../main/core/utils/ui/web_driver_actions');

Before(async function(scenario) {
  logger.info(scenario.pickle.name);
});

Before({ tags: "@ui" }, async function() {
  await driver_manager.init()
});

After({ tags: '@ui' }, async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenShot = await WebDriverActions.takeScreenshot();
    if (screenShot) {
      this.attach(screenShot, 'image/png');
    }
  }
  await WebDriverActions.driver.manage().deleteAllCookies();
  await WebDriverActions.driver.executeScript('window.localStorage.clear()');
  await WebDriverActions.driver.executeScript('window.sessionStorage.clear()');
});


AfterAll(async function () {
  if(await driver_manager.driver) {
    await driver_manager.driver.quit();
    logger.info('All windows were closed.');
  }
});
