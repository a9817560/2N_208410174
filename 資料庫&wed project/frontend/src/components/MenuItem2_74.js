import React from 'react';

import styles from './MenuItem_74.module.scss';

const MenuItem2_74 = ({ name, remote_url, cid, size }) => {
  return (
    <div className={`${size} ${styles.menu_item}`}>
      <img className={styles.background_image} src={remote_url} alt=''></img>
      <a href='./hats.html' className={styles.content}>
        <h1 className={styles.title}>{name}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </a>
    </div>
  );
};

export default MenuItem2_74;

// <div className="menu-item">
// <img className="background-image" src={imageUrl} alt="">
//     <a href="./hats.html" class="content">
//         <h1 className="title">{title}</h1>
//         <span className="subtitle">SHOP NOW</span>
//     </a>
// </div>
