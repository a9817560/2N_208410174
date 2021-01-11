import React from 'react';

import CollectionItem_74 from './CollectionItem_74';

import styles from './ShowProducts_74.module.scss';

const ShowProducts_74 = ({ title, items }) => (
  <div className={styles.collection_page}>
    <h1 className={styles.title}>{title.toUpperCase()}</h1>
    <div className={styles.items}>
      {items
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem_74 key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default ShowProducts_74;
