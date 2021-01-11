import React from 'react';

import SHOP_DATA from './Shop.data.js';

import CollectionPreview_74 from '../components/CollectionPreview_74';

class ShopOverview_74 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop_page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview_74 key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopOverview_74;
