const Clothing = require('../models/clothingModel_74');
const Category = require('../models/categoryModel_74');

//READ
exports.getHomepage3 = async (req, res) => {
  let data = {};
  try {
    await Category.fetchAll().then(([rows]) => {
      // console.log('getCategories', JSON.stringify(rows));
      data.catogory = rows;
      res.json(rows);
    });

  } catch (err) {
    console.log(err);
  }
};

exports.getProductsByCategory3 = async (req, res) => {
  let data = [];
  let cid = 0;
  try {
    if (req.params.product === 'hats') {
      data[0] = {
        id: 1,
        title: "hats"
      }
    }
    else if (req.params.product === 'jackets') {
      data[0] = {
        id: 2,
        title: "jackets"
      }
    }
    else if (req.params.product === 'sneakers') {
      data[0] = {
        id: 3,
        title: "sneakers"
      }
    }
    else if (req.params.product === 'womens') {
      data[0] = {
        id: 4,
        title: "womens"
      }
    }
    else if (req.params.product === 'mens') {
      data[0] = {
        id: 5,
        title: "mens"
      }
    }

    await Clothing.fetchProductsByCategory3(data[0].id).then(([rows]) => {
      // console.log('getProductsByCategory3', JSON.stringify(rows));
      data[0].items = rows;
      res.json(data);
    });

  } catch (err) {
    console.log(err);
  }
};

// For React 
exports.getShopOverview3 = async (req, res) => {
  let data = [];
  try {
    await Clothing.fetchProductsByCategory3(1).then(([rows]) => {
      data[0] = {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: rows
      }
    });
    await Clothing.fetchProductsByCategory3(2).then(([rows]) => {
      data[1] = {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: rows
      }
    });
    await Clothing.fetchProductsByCategory3(3).then(([rows]) => {
      data[2] = {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: rows
      }
    });
    await Clothing.fetchProductsByCategory3(4).then(([rows]) => {
      data[3] = {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: rows
      }
    });
    await Clothing.fetchProductsByCategory3(5).then(([rows]) => {
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

