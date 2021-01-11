import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import SHOP_DATA from './Shop.data.js';

import CollectionPreview_74 from '../components/CollectionPreview_74';

const ShopOverview3_74 = () => {
  
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    const fetchShopItems = async () => {
      const { data } = await axios.get('/crown3_74/shop3_74');
      setShopItems(data);
    };
    fetchShopItems();
  }, []);

  console.log('shopItems data', shopItems);

  return (
    <div className='shop_page'>
      {shopItems.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview_74 key={id} {...otherCollectionProps} />
      ))}
    </div>
  );

}

export default ShopOverview3_74;
