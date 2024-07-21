@functional @shoppingCart @ui @1 @smoke @end2end
Feature: shopping cart
  Test performed on saucedemo, contains test cases related with shopping cart

  Scenario:verify that a user can buy items
    Given the user logs into portal as "standard_user"
    When the user adds to cart the followings products from inventory page
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
