Feature('register');

const NEW_USER = {
    firstName: "Username",
    lastName: "666",
    email: Date.now() + '@test.com',
    phone: '+380' + Date.now(),
    password: 'password',
};

Scenario('register new user',  ({ I, basePage, registerPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/');
    basePage.clickMyAccountSpoiler();
    basePage.clickMyRegisterLink();
    registerPage.verifyRegisterPage(),
    registerPage.submitNewUserForm(NEW_USER)
});
