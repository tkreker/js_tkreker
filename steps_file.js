const base = require("./pages/base");

const STORE_URL ="http://opencart.qatestlab.net/index.php";

module.exports = function() {
  const signInButton = {xpath: "//a[text()='Sign In']"};
  const emailField = {css: "input#input-email"};
  const passwordField = {css: "input#input-password"};
  const colorSpoiler = {xpath: "//a[@class='sbSelector']"};
  const brownColor = {xpath: '//a[@href="#514"]'};
  const addToCartButton = {xpath: '//*[@id="button-cart"]'};
  const checkoutButton = {xpath: "//*[@class='btn btn-primary' and contains(text(), 'Checkout')]"};
  
  return actor({

    openStor() {
      this.amOnPage(STORE_URL);
    },

    login(user) {
      this.openStor();
      this.click(signInButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      base.submitForm();
      this.see("My Account");
    },

    chooseColor() {
      this.click(colorSpoiler);
      this.click(brownColor);
    },

    getProductPrice() {
    const productPriceString = this.grabTextFrom({xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]'});
    const colorPriceString = this.grabTextFrom({xpath: "//a[contains(text(),'Black') and contains(text(), '(+$') and contains(@class, 'sbSelector')]"});
    return productPrice = this.parsePrice(productPriceString);
    return colorPrice = this.parsePrice(colorPriceString);
    //const totalPrice = productPrice + colorPrice;
    },

    getCheckoutPrice() {
      const checkoutPriceString = this.grabTextFrom({xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[3]/td[2]'});
      const shippingPriceString = this.grabTextFrom({xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[2]/td[2]'});
      const checkoutPrice = Number(checkoutPriceString.slice(1));
      const shippingPrice = Number(shippingPriceString.slice(1));
    },

    addToCart () {
      this.click(addToCartButton);
    },

    proceedToCheckout() {
      this.click(checkoutButton);
    }
  });
}
