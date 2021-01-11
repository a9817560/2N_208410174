import React from 'react';

import CollectionItem_74 from './CollectionItem_74';

import styles from './CollectionPreview_74.module.scss';

const CollectionPreview_74 = ({ title, items }) => (
  <div className={styles.collection_preview}>
    <h1 className={styles.title}>{title.toUpperCase()}</h1>
    <div className={styles.preview}>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem_74 key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview_74;
