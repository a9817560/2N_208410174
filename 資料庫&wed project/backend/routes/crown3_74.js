var express = require('express');
const { routes } = require('../app');
var router = express.Router();

const crown3Controller = require('../controllers/crown3Controller_74');


// READ
router.get('/', crown3Controller.getHomepage3);
router.get('/shop3_74/:product', crown3Controller.getProductsByCategory3);
router.get('/shop3_74', crown3Controller.getShopOverview3);

module.exports = router;
