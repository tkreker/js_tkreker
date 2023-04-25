const Helper = require('@codeceptjs/helper');

class PageHelper extends Helper {

  async parsePrice(string) {
    if (typeof string !== 'string') {
      throw new Error('Input is not a string');
    }
    return parseFloat(string.replaceAll(/[^0-9\.]/g, ""));
  };
  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = PageHelper;
