/** @format */

const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MobelPage extends Page {
  /**
   * define selectors using getter methods
   */

  get favicon() {
    return $('//button[@name="add to wishlist"]');
  }

  get abc() {
    return $('//span[@data-testid="wishlist-counter"]');
  }

  get carticon() {
    return $('//span[@data-testid="wishlist-counter"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  addtocart() {
    this.favicon.waitForClickable({
      timeout: 30000,
    });
    this.favicon.click();
  }
}

module.exports = new MobelPage();
