var express = require('express');
const { routes } = require('../app');
var router = express.Router();

const crown2Controller = require('../controllers/crown2Controller_74');


// CREATE
router.post('/create', crown2Controller.createProduct);

// READ
router.get('/', crown2Controller.getHomepage);
router.get('/shop_74', crown2Controller.getShopOverview);
router.get('/shop_74/:product', crown2Controller.getProductsByCategory);

// FOR REACT 
router.get('/shop2_74', crown2Controller.getShopOverview2);

// UPDATE
router.post('/update', crown2Controller.updateProduct);

// DELETE
router.get('/delete', crown2Controller.deleteProduct);

module.exports = router;
