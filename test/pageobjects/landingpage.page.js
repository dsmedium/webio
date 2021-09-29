/** @format */

const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
  /**
   * define selectors using getter methods
   */

  get cookieaccept() {
    return $("#onetrust-accept-btn-handler");
  }

  get inputfield() {
    return $("input[placeholder='Produktsuche...']");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  search(keyword) {
    this.cookieaccept.click();
    this.inputfield.setValue(keyword);
    //sending enter to search
    this.inputfield.setValue("\uE007");
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("/");
  }
}

module.exports = new LandingPage();
