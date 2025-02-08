const products = [];

module.exports =  class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    console.log('sss' +products.push(this));
  }
  static fetchAll() {
    return products;
  }
}
