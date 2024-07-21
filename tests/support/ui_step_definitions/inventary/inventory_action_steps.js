const { When } = require("@cucumber/cucumber");
const inventoryPage = require("../../../../main/saucedemo/ui/inventory_page");


When("the user adds to cart the followings products from inventory page", async function (dataTable) {
  let products = dataTable.rawTable;
  for (let product of products) {
    await inventoryPage.selectProductByName(product)
  }
});