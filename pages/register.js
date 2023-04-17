const { I } = inject();

module.exports = {
firstNameField: {xpath: '//*[@id="input-firstname"]'},
lastNameField: {xpath: '//*[@id="input-lastname"]'},
emailField: {xpath: '//*[@id="input-email"]'},
phoneNumberField: {xpath: '//*[@id="input-telephone"]'},
passwordField: {xpath: '//*[@id="input-password"]'},
passwordRepeatField: {xpath: '//*[@id="input-confirm"]'},
iHaveReadRatioButton: {xpath: '//*[@id="content"]/form/div/div/input[1]'},

    verifyRegisterPage() {
      I.see('Регистрация');
    },

    fillNewUserForm(user) {
      I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.phoneNumberField, user.phone);
    I.fillField(this.passwordField, user.password);
    I.fillField(this.passwordRepeatField, user.passwordRepeat);
    }
}
