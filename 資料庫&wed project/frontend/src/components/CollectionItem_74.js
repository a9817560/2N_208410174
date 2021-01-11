import React from 'react';

import styles from './CollectionItem_74.module.scss';

const CollectionItem_74 = ({ id, name, price, imageUrl }) => (
  <div className={styles.collection_item}>
    <div
      className={styles.image}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className={styles.collection_footer}>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price}</span>
    </div>
  </div>
);

export default CollectionItem_74;
