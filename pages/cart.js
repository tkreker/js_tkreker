const { I, basePage } = inject();

module.exports = {
  cartButton: { xpath: '//*[@id="cart"]/button/i' },
  openCartButton: { xpath: '//*[@id="cart"]/ul/li[3]/div/a[1]' },

  async cleanCart() {
    I.click(this.cartButton);
    if (I.seeElement(this.openCartButton)) {
      I.click(this.openCartButton);
      const cartItemSelector = '//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/span/button[2]';
      const cartItemCount = await I.grabNumberOfVisibleElements(cartItemSelector);
      console.log("cartItems", cartItemCount);

      if (cartItemCount > 0) {
        I.click(cartItemSelector);
      }
      else {
        console.log("Cart is already empty");
    }
    }
    else {
      console.log("Cart is already empty");
    }
  }
}
