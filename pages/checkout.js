const { I } = inject();

module.exports = {
newAddRadioButton: {xpath: '//*[@id="collapse-payment-address"]/div/form/div[3]/label'},
firstNameField: {xpath: '//*[@id="input-payment-firstname"]'},
lastNameField: {xpath: '//*[@id="input-payment-lastname"]'},
addressField: {xpath: '//*[@id="input-payment-address-1"]'},
cityField: {xpath: '//*[@id="input-payment-city"]'},
postcodeField: {xpath: '//*[@id="input-payment-postcode"]'},
//countrySelector: {xpath: ''},
//countrySelected: {xpath: ''},
regionSelector: {xpath: "//a[contains(text(),'Please Select') and contains(@id, 'sbSelector')]"},
regionSelected: {xpath: '//a[@rel="3513"]'},
continueButton: {xpath: '//*[@id="button-payment-address"]'},
currentAddRadioButton: {xpath: '//*[@id="collapse-shipping-address"]/div/form/div[1]/label'},
continueButton2: {xpath: '//*[@id="button-shipping-address"]'},
shippingMethodRadioButton: {xpath: '//*[@id="collapse-shipping-method"]/div/div[1]/label'},
continueButton3: {xpath: '//*[@id="button-shipping-method"]'},
paymentRadioButton: {xpath: '//*[@id="collapse-payment-method"]/div/div[1]/label'},
iHaveReadCheckbox: {xpath: '//*[@id="agree1"]'},
continueButton4: {xpath: '//*[@id="button-payment-method"]'},
confirmOrderButton: {xpath: '//*[@id="button-confirm"]'},

verifyCheckoutPage() {
  I.see('Checkout');
},

submitCheckoutForm(user) {
  I.click(this.newAddRadioButton);
  I.fillField(this.firstNameField, user.firstName);
  I.fillField(this.lastNameField, user.lastName);
  I.fillField(this.addressField, user.address);
  I.fillField(this.cityField, user.city);
  I.fillField(this.postcodeField, user.postcode);
  //I.click(this.countrySelector);
  //I.click(this.countrySelected);
  I.click(this.regionSelector);
  I.click(this.regionSelected);
  I.click(this.continueButton);
  I.click(this.currentAddRadioButton);
  I.click(this.continueButton2);
  I.click(this.shippingMethodRadioButton);
  I.click(this.continueButton3);
I.click(this.paymentRadioButton);
I.click(this.iHaveReadCheckbox);
I.click(this.continueButton4);
},

confirmOrder() {
  I.click(this.confirmOrderButton);
},

verifySuccessfullOrder() {
  I.see('Your order has been placed!');
}
}

