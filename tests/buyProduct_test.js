const USER = {
    email: "test@test.qa",
    password: "test",
    firstName: "Name",
    lastName: "Lastname",
    address: "Address",
    city: "City",
    postcode: "666666",
}

Feature('purchase');

Scenario.only('buy product',  ({ I, basePage, checkoutPage  }) => {
    I.login(USER);
    I.amOnPage("http://opencart.qatestlab.net/index.php?route=product/product&product_id=74");
    //add method to clean the cart - grabNumberOfVisibleElements() 
   // I.selectOption("//div[@id='product']//a[contains(text(),'Выберите') and contains(@id, 'sbSelector')]", 'Gray'); //select size, color. try to select with .selectOption()
    I.chooseColor();
    I.getProductPrice(); // I.getProductPrice();//get product price, get size price, get color size, return sum of prices - totalPrice
    //цены будут строкой. слайсом отрезать значок доллара. перевести в числовое значение
    I.addToCart();//add product to cart
    basePage.openCart();//click cart icon (add method to base page)
    I.proceedToCheckout(); //click checkout
    //create page object checkout
    checkoutPage.verifyCheckoutPage();
    checkoutPage.submitCheckoutForm(USER); //complete all steps to purchase product
    //click continue
    //get flat shipping rate price - shippingPrice
    //I.getCheckoutPrice();//get total checkout price - checkoutPrice
    //I.assertEqual(totalPrice + shippingPrice, checkoutPrice, "Prices are not in match");
    checkoutPage.confirmOrder();//confirm order
    checkoutPage.verifySuccessfullOrder(); //verify final text
    pause();
});