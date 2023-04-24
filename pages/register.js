const { I } = inject();

module.exports = {
firstNameField: {xpath: '//*[@id="input-firstname"]'},
lastNameField: {xpath: '//*[@id="input-lastname"]'},
emailField: {xpath: '//*[@id="input-email"]'},
phoneNumberField: {xpath: '//*[@id="input-telephone"]'},
passwordField: {xpath: '//*[@id="input-password"]'},
passwordRepeatField: {xpath: '//*[@id="input-confirm"]'},
subscribeRadioButton: {xpath: '//label[@class="radio-inline"][2]'},
iHaveReadRadioButton: {xpath: '//input[@name="agree"]'},
continueButton: {xpath: '//input[@name="agree"]'},

    verifyRegisterPage() {
      I.see('Регистрация');
    },

    submitNewUserForm(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.phoneNumberField, user.phone);
    I.fillField(this.passwordField, user.password);
    I.fillField(this.passwordRepeatField, user.password);
    I.click(this.subscribeRadioButton);
    I.click(this.iHaveReadRadioButton);
    I.click(this.continueButton);  
    },

    verifySuccessfullRegistration() {
      I.see('Ваша учетная запись создана!');
    }
}
