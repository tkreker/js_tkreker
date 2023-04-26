const cart = require("../pages/cart");
const { getProductPrice } = require("../pages/product");

const USER = {
    email: "test@test.qa",
    password: "test",
    firstName: "Name",
    lastName: "Lastname",
    address: "Address",
    city: "City",
    postcode: "666666",
};



Feature('purchase');

Scenario.only('buy product', async ({ I, basePage, checkoutPage, productPage, cartPage }) => {
    I.login(USER);
    //await cartPage.cleanCart();
    I.amOnPage("http://opencart.qatestlab.net/index.php?route=product/product&product_id=74");
    productPage.chooseColor();
    await productPage.getProductPrice();
    const totalPrice = await productPage.getProductPrice();
    productPage.addToCart();
    basePage.openCart();
    productPage.proceedToCheckout();
    checkoutPage.verifyCheckoutPage();
    checkoutPage.submitCheckoutForm(USER);
    await productPage.getShippingPrice();
    await productPage.getCheckoutPrice();
    const checkoutPrice = await productPage.getCheckoutPrice();
    const shippingPrice = await productPage.getShippingPrice();
    I.assertEqual(totalPrice + shippingPrice, checkoutPrice, "Prices are not in match");
    checkoutPage.confirmOrder();
    checkoutPage.verifySuccessfullOrder();
    pause();
});