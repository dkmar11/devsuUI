const { Then } = require("@cucumber/cucumber");
const cartPage = require("../../../../main/saucedemo/ui/cart_page");
const WebDriverActions = require("../../../../main/core/utils/ui/web_driver_actions");
const checkoutOnePage = require("../../../../main/saucedemo/ui/checkout_one_page");
const checkoutTwoPage = require("../../../../main/saucedemo/ui/checkout_two_page");
const { expect } = require("expect");
const checkoutCompletedPage = require("../../../../main/saucedemo/ui/checkout_completed_page");

Then("the user buy its cart with the followings personal information", async function (dataTable) {
  const personalInformation = dataTable.hashes();

  await WebDriverActions.clickOnElement(cartPage.checkoutButton)

  await checkoutOnePage.fillUpForm(personalInformation[0]);
  await WebDriverActions.clickOnElement(checkoutOnePage.continueButton);

  await WebDriverActions.clickOnElement(checkoutTwoPage.finishButton);

})

Then("the user should be able to see {string} from checkout completed page", async function (message) {
  expect(message).toBe(await checkoutCompletedPage.getCompletedMessage());
})