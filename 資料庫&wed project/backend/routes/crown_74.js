var express = require('express');
const { routes } = require('../app');
var router = express.Router();

/* route /crown */
router.get('/', (req, res, next) => {
  res.render('crown_74', { data: {} });
});

router.get('/shop_74', (req, res, next) => {
  res.render('shop_xx', { data: {} });
});

router.get('/shop/hats', (req, res, next) => {
  res.render('products_74', { data: 'Hats' });
});

router.get('/shop/jackets', (req, res, next) => {
  res.render('products_74', { data: 'Jackets' });
});

router.get('/shop/sneakers', (req, res, next) => {
  res.render('products_74', { data: 'Sneakers' });
});

router.get('/shop/womens', (req, res, next) => {
  res.render('products', { data: 'Womens' });
});

router.get('/shop/mens', (req, res, next) => {
  res.render('products', { data: 'Mens' });
});

module.exports = router;
