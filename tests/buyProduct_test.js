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

Scenario.only('buy product', async ({ I, basePage, checkoutPage, productPage }) => {
    I.login(USER);
    I.amOnPage("http://opencart.qatestlab.net/index.php?route=product/product&product_id=74");
    //add method to clean the cart - grabNumberOfVisibleElements() 
    // I.selectOption("//div[@id='product']//a[contains(text(),'Выберите') and contains(@id, 'sbSelector')]", 'Gray'); //select size, color. try to select with .selectOption()
    productPage.chooseColor();
    await productPage.getProductPrice();
    productPage.addToCart();
    basePage.openCart();
    productPage.proceedToCheckout();
    checkoutPage.verifyCheckoutPage();
    checkoutPage.submitCheckoutForm(USER);
    await productPage.getShippingPrice();
    await productPage.getCheckoutPrice();
    I.assertEqual(productPage.getProductPrice() + productPage.getShippingPrice(), productPage.getCheckoutPrice(), "Prices are not in match");
    checkoutPage.confirmOrder();
    checkoutPage.verifySuccessfullOrder();
    pause();
});