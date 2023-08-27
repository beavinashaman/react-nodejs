const Product = require('../models/product')

exports.getAddProduct = (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/add-product",
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
 // res.sendFile(path.join(rootDir, "views", "shop.html"));
 
  Product.fetchAll(products => res.render('shop', {
    pageTitle:'Shop page list',
    prods: products,
    path:'/',
    hasProducts: products.length>0,
    activeShop: true,
    productCSS: true
  }));
    
  }
