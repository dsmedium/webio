/** @format */

const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
  /**
   * define selectors using getter methods
   */

  get removeicon() {
    return $("//button[contains(@class, 'blockListProduct__delete')]");
  }

  get emptywhishlist() {
    return $("//p[contains(@class, 'wishlistNoProducts__text')]");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  removefromcart() {
    this.removeicon.waitForClickable({
      timeout: 5000,
    });
    this.removeicon.click();
  }

  open() {
    return super.open("/customer/wishlist/index/");
  }
}

module.exports = new CheckoutPage();
