const { I } = inject();

module.exports = {
  colorSpoiler: { xpath: "//a[@class='sbSelector']" },
  brownColor: { xpath: '//a[@href="#514"]' },
  addToCartButton: { xpath: '//*[@id="button-cart"]' },
  checkoutButton: { xpath: "//*[@class='btn btn-primary' and contains(text(), 'Checkout')]" },

  chooseColor() {
    I.click(this.colorSpoiler);
    I.click(this.brownColor);
  },

  async getProductPrice() {
    const productPriceString = await I.grabTextFrom({ xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]' });
    const colorPriceString = await I.grabTextFrom({ xpath: "//a[contains(text(),'Black') and contains(text(), '(+$') and contains(@class, 'sbSelector')]" });
    const productPrice = I.parsePrice(productPriceString);
    const colorPrice = I.parsePrice(colorPriceString);
    return totalPrice = productPrice + colorPrice;
  },

  async getCheckoutPrice() {
    const checkoutPriceString = await I.grabTextFrom({ xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[3]/td[2]' });
    return checkoutPrice = I.parsePrice(checkoutPriceString);
  },

  async getShippingPrice() {
    const shippingPriceString = await I.grabTextFrom({ xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[2]/td[2]' });
    return shippingPrice = I.parsePrice(shippingPriceString);
  },

  addToCart() {
    I.click(this.addToCartButton);
  },

  proceedToCheckout() {
    I.click(this.checkoutButton);
  }
}
