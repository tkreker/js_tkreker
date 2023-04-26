const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://opencart.qatestlab.net/',
      waitForNavigation: 'networkidle',
      waitForTimeout: 5000,
      show: true,
      browser: 'chromium'
    },

    "ChaiWrapper": {
      "require": "codeceptjs-chai"
    },

    PageHelper: {
      require: './helpers/pageHelper_helper.js',
    },
  },
  include: {
    I: './steps_file.js',
    basePage: "./pages/base.js",
    registerPage: "./pages/register.js",
    checkoutPage: "./pages/checkout.js",
    productPage: "./pages/product.js",
    cartPage: "./pages/cart.js"
  },
  name: 'js_tkreker'
}