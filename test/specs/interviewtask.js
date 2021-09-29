/** @format */

const LoginPage = require("../pageobjects/login.page");
const LandingPage = require("../pageobjects/landingpage.page");
const MobelPage = require("../pageobjects/mobel.page");
const CheckoutPage = require("../pageobjects/checkout.page");
const checkoutPage = require("../pageobjects/checkout.page");

describe("Add and remove the item from cart", () => {
  it("should search mobel", () => {
    LandingPage.open();
    LandingPage.search("möbel");
    expect(browser).toHaveTitle(
      "Möbel online kaufen | Möbel Online Shop | WestwingNow"
    );
  });

  it("should login with valid new", () => {
    browser.refresh();
    MobelPage.addtocart();
    LoginPage.login("anaamnizamii@gmail.com", "tESTtHEtESTER");
    browser.waitUntil(() => MobelPage.carticon, {
      timeout: 5000,
    });
    expect(MobelPage.carticon).toExist();
  });

  it("should remove item from cart", () => {
    CheckoutPage.open();
    CheckoutPage.removefromcart();

    expect(checkoutPage.emptywhishlist).toHaveTextContaining(
      " ist momentan leer"
    );
  });
});
