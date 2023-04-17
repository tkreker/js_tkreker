const { passwordRepeatField } = require("../pages/register");

Feature('register');

const NEW_USER = {
    firstName: "Username",
    lastName: "666",
    email: Date.now() + '@test.com',
    phone: '+380' + Date.now(),
    password: 'password',
    passwordRepeat: 'password',
};

Scenario('register new user',  ({ I, basePage, registerPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/');
    basePage.clickMyAccountSpoiler();
    basePage.clickMyRegisterLink();
    registerPage.verifyRegisterPage(),
    registerPage.fillNewUserForm(NEW_USER),
    pause();
});

xScenario('grab price',  async ({ I }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=29');
    const price = await I.grabTextFrom({xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]'});
    console.log(Number(price.slice(1)));
   
});
