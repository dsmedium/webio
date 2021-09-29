/** @format */

const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */

  get switchlogin() {
    return $('button[type="button"]');
  }

  get inputUsername() {
    return $("//input[@type='email']");
  }
  get inputPassword() {
    return $("//input[@type='password']");
  }
  get btnSubmit() {
    return $('button[data-testid="login_reg_submit_btn"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  login(username, password) {
    this.switchlogin.click();
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.btnSubmit.waitForClickable({
      timeout: 5000,
    });
    this.btnSubmit.click();
  }
}

module.exports = new LoginPage();
