import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/crown.svg';

import styles from  './Header_74.module.scss';

const Header_74 = () => (
  <div className={styles.header}>
    <Link className={styles.logo_container} to='/'>
      <Logo className={styles.logo} />
    </Link>
    <div className={styles.options}>
      <Link className={styles.option} to='/shop_74'>
        SHOP
      </Link>
      <Link className={styles.option} to='/crown3_74/shop3_74'>
        SHOP3
      </Link>
      <Link className={styles.option} to=''>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header_74;
