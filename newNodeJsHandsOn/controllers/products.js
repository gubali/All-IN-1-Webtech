const Product = require('../models/product');
//import products from '../models/product';
exports.getAddProduct=(req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product to portal',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}

exports.postAddProduct= (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
    res.redirect('/');
  }


  exports.getProducts= (req, res,next)=>{
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop1',
    path: '/ab',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
}