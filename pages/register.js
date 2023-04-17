const { I } = inject();

module.exports = {
firstNameField: {xpath: '//*[@id="input-firstname"]'},
lastNameField: {xpath: '//*[@id="input-lastname"]'},
emailField: {xpath: '//*[@id="input-email"]'},
phoneNumberField: {xpath: '//*[@id="input-telephone"]'},
passwordField: {xpath: '//*[@id="input-password"]'},
passwordRepeatField: {xpath: '//*[@id="input-confirm"]'},
subscribeRadioButton: {xpath: '//*[@id="content"]/form/fieldset[3]/div/div/label[2]'},
iHaveReadRadioButton: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
continueButton: {xpath: '//*[@id="content"]/form/div/div/input[2]'},

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
