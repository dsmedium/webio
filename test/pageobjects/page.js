/** @format */

module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    console.log(path);
    if (path === "/" || path === undefined) return browser.url("/");
    else return browser.url(`https://www.westwingnow.de${path}`);
  }
};
