const db = require('../utils/database');

const Category_74 = class Category_74 {
  constructor(id, name, price, remote_url, local_url) {
    this.id = id;
    this.name = title;
    this.size = size;
    this.remote_url = remote_url;
    this.local_url = local_url;
    this.link_url = link_url;
  }

  // READ
  static fetchAll() {
    return db.execute('select * from category_74');
  }

  // For React code
  static fetchAll3() {
    return db.execute('select id, name as title, size, remote_url as imageUrl, local_url as localUrl, link_url as linkUrl from category_74');
  }

};

// test
const test = async (req, res) => {
  try {
    await Category_74.fetchAll().then(([rows]) => {
      console.log('testFetchAll', JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

// test();


module.exports = Category_74;
