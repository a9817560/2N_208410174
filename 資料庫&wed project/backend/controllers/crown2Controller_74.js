const Clothing = require('../models/clothingModel_74');
const Category = require('../models/categoryModel_74');
// CREATE
exports.createProduct = async (req, res) => {
  console.log("createProduct", req.body);
  try {
    const create = await Clothing.create(req, res).then(([rows]) => {
      res.redirect('/crown2_xx/shop_xx');
    });
  } catch (err) {
    console.log(err);
  }
};

//READ
exports.getHomepage = async (req, res) => {
  let data = {};
  try {
    await Category.fetchAll().then(([rows]) => {
      // console.log('getCategories', JSON.stringify(rows));
      data.catogory = rows;
      res.json(rows);
    });

    // res.render('crown2_xx', { title: 'Homepage', data: data.category });
  } catch (err) {
    console.log(err);
  }
};

exports.getProductsByCategory = async (req, res) => {
  let data = {};
  data.cid = 0;
  try {
    if (req.params.product === 'hats') data.cid = 1;
    else if (req.params.product === 'jackets') data.cid = 2;
    else if (req.params.product === 'sneakers') data.cid = 3;
    else if (req.params.product === 'womens') data.cid = 4;
    else if (req.params.product === 'mens') data.cid = 5;

    await Clothing.fetchProductsByCategory(data.cid).then(([rows]) => {
      data.clothing = rows;
      // res.json(data.clothing);
    });

    res.render('products2_xx', {
      data: data.clothing,
      title: req.params.product,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getShopOverview = async (req, res) => {
  let data = {};
  console.log('data in');
  try {
    await Clothing.fetchProductsByCategory(1).then(([rows]) => {
      data.hats = rows;
    });
    await Clothing.fetchProductsByCategory(2).then(([rows]) => {
      data.jackets = rows;
    });
    await Clothing.fetchProductsByCategory(3).then(([rows]) => {
      data.sneakers = rows;
    });
    await Clothing.fetchProductsByCategory(4).then(([rows]) => {
      data.womens = rows;
    });
    await Clothing.fetchProductsByCategory(5).then(([rows]) => {
      data.mens = rows;
    });
    // console.log('data', JSON.stringify(data));
    res.json(data);

    // res.render('shop2_xx', { data, count: 6 });
  } catch (err) {
    console.log('error', err);
  }
};


// For React 
exports.getShopOverview2 = async (req, res) => {
  let data = [];
  try {
    await Clothing.fetchProductsByCategory(1).then(([rows]) => {
      data[0] = {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: rows
      }
    });
    await Clothing.fetchProductsByCategory(2).then(([rows]) => {
      data[1] = {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: rows
      }
    });
    await Clothing.fetchProductsByCategory(3).then(([rows]) => {
      data[2] = {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: rows
      }
    });
    await Clothing.fetchProductsByCategory(4).then(([rows]) => {
      data[3] = {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: rows
      }
    });
    await Clothing.fetchProductsByCategory(5).then(([rows]) => {
      data[4] = {
        id: 5,
        title: 'Mens',
        routeName: 'mens',
        items: rows
      }
    });
    // console.log('data', JSON.stringify(data));
    res.json(data);

  } catch (err) {
    console.log('error', err);
  }
};

// UPDATE
exports.updateProduct = async (req, res) => {
  try {
    // console.log("updateProduct", req.body);
    await Clothing.updateById(req, res).then(([rows]) => {
      res.redirect('/crown2_xx/shop_xx');
    });
  } catch (err) {
    console.log(err);
  }
};


// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    console.log("deleteProduct", req.query.id);
    await Clothing.deleteById(req.query.id).then(([rows]) => {
      res.redirect('/crown2_xx/shop_xx');
    });
  } catch (err) {
    console.log(err);
  }
};

