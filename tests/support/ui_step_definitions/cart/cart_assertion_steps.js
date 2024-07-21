const { Then } = require("@cucumber/cucumber");
const cartPage = require("../../../../main/saucedemo/ui/cart_page");
const WebDriverActions = require("../../../../main/core/utils/ui/web_driver_actions");
const headerPage = require("../../../../main/saucedemo/ui/header_page");
const { expect } = require("expect");

Then("the user should be able to see the followings products in the cart", async function (dataTable) {

  await WebDriverActions.clickOnElement(headerPage.cartButton)

  const cartProducts = dataTable.hashes();
  const expectedProducts = await cartPage.getProductsFromTheCart()
  expect(expectedProducts).toEqual(cartProducts)
})