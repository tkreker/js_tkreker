const { I } = inject();

module.exports = {
  myAccountSpoiler: {xpath: '//*[@id="top-links"]/ul/li/span/span'},
  registerLink: {xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a'},
  submitButton: {xpath: '//input[@type="submit"]'},
  cartButton: {xpath: '//*[@id="cart"]/button/i'},
  openCartButton: {xpath: '//*[@id="cart"]/ul/li[3]/div/a[1]'},

    clickMyAccountSpoiler() {
      I.click(this.myAccountSpoiler);
    },

    clickMyRegisterLink() {
      I.click(this.registerLink);
    },

    submitForm() {
      I.click(this.submitButton);
    },

    openCart() {
      I.click(this.cartButton);
      I.click(this.openCartButton);
    }
  }    