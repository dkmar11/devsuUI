const { Before, After, AfterAll, Status } = require('@cucumber/cucumber');
const logger = require('../../../main/core/utils/logger');
const driverManager = require('../../../main/core/selenium/driver_manager');
const WebDriverActions = require('../../../main/core/utils/ui/web_driver_actions');
const configurationManager = require('../../../main/core/utils/configuration_manager');

Before(async function(scenario) {
  logger.info(scenario.pickle.name);
});

Before({ tags: "@ui" }, async function() {
  const baseUrl = configurationManager.environment.ui_url;
  await driverManager.init();
  await WebDriverActions.navigateTo(baseUrl)
});

After({ tags: '@ui' }, async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenShot = await WebDriverActions.takeScreenshot();
    if (screenShot) {
      this.attach(Buffer.from(screenShot, 'base64'), 'image/png');
    }
  }
  await WebDriverActions.driver.manage().deleteAllCookies();
  await WebDriverActions.driver.executeScript('window.localStorage.clear()');
  await WebDriverActions.driver.executeScript('window.sessionStorage.clear()');
});


AfterAll(async function () {
  if(await driverManager.driver) {
    await driverManager.driver.quit();
    logger.info('All windows were closed.');
  }
});
