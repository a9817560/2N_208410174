import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MenuItem3_74 from './MenuItem3_74'
import styles from './Directory_74.module.scss'

const Directory3_74 = () => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
      const fetchMenuItems = async () => {
        const { data } = await axios.get('/crown3_74');
        setMenuItems(data);
      };
      fetchMenuItems();
    }, []);

    console.log('menuItems data', menuItems);
    return (
        <div className={styles.directory_menu}>
            {
                menuItems.map(({ name, remote_url, id, size, link_url }) => (
                    <MenuItem3_74 key={id} name={name} remote_url={remote_url} size={size} link_url={link_url} />
                ))
            }
        </div>
    )
}

export default Directory3_74;