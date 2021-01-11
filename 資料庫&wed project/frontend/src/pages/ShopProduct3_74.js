import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ShowProducts_74 from '../components/ShowProducts_74';
import styles from '../components/CollectionPreview_74.module.scss';

const ShopProducts3_74 = ( props ) => {
  console.log('props', props);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${props.match.url}`);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  console.log('products', products);
  return (
    <div className='shop_page'>
      {products.map(({ id, ...otherCollectionProps }) => (
        <ShowProducts_74 key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopProducts3_74;
