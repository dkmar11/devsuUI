const { Given } = require("@cucumber/cucumber");
const loginPage = require("../../../main/saucedemo/ui/login_page");


Given("the user logs into portal as {string}", async function (user) {
  await loginPage.login(user)
});