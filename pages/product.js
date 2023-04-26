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
    console.log("productPriceString", productPriceString);
    const colorPriceString = await I.grabTextFrom({ xpath: "//a[contains(text(),'Black') and contains(text(), '(+$') and contains(@class, 'sbSelector')]" });
    console.log("colorPriceString", colorPriceString);
    const productPrice = await I.parsePrice(productPriceString);
    const colorPrice = await I.parsePrice(colorPriceString);
    console.log("productPrice", productPrice);
    console.log("colorPrice", colorPrice);
    console.log("totalPrice", productPrice + colorPrice);
    return productPrice + colorPrice;
  },

  //async totalPrice() {
    //const totalPrice = await getProductPrice(),
 // },  

  async getCheckoutPrice() {
    const checkoutPriceString = await I.grabTextFrom({ xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[3]/td[2]' });
    console.log("checkoutPriceString", checkoutPriceString);
    console.log("checkoutPrice", await I.parsePrice(checkoutPriceString));
    return checkoutPrice = await I.parsePrice(checkoutPriceString);
  },

  //async checkoutPrice() {
    //const checkoutPrice = await getCheckoutPrice();
  //},

  async getShippingPrice() {
    const shippingPriceString = await I.grabTextFrom({ xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[2]/td[2]' });
    console.log("shippingPriceString", shippingPriceString);
    console.log("shippingPrice", await I.parsePrice(shippingPriceString));
    return shippingPrice = await I.parsePrice(shippingPriceString);
  },

  //async shippingPrice() {
    //const shippingPrice = await shippingPrice();
  //},

  addToCart() {
    I.click(this.addToCartButton);
  },

  proceedToCheckout() {
    I.click(this.checkoutButton);
  }
}
