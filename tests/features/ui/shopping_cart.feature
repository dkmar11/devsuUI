@functional @shoppingCart @ui @1 @smoke @end2end
Feature: shopping cart
  Test performed on saucedemo, contains test cases related with shopping cart

  Scenario:verify that a user can buy items
    Given the user logs into portal as "standard_user"
    When the user adds to cart the followings products from inventory page
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
    Then the user should be able to see the followings products in the cart
      | name                  | description                                                                                                                                                     | price  |
      | Sauce Labs Backpack   | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.                          | $29.99 |
      | Sauce Labs Bike Light | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. | $9.99  |
    And the user buy its cart with the followings personal information
      | firstName | lastName | postalCode |
      | israel    | zambrana | 0000       |
    And the user should be able to see "Thank you for your order!" from checkout completed page