import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MenuItem_74 from './MenuItem_74'
import styles from './Directory_74.module.scss'

const Directory2_74 = () => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
      const fetchMenuItems = async () => {
        const { data } = await axios.get('/crown2_arr_74');
        setMenuItems(data);
      };
      fetchMenuItems();
    }, []);

    console.log('menuItems data', menuItems);
    return (
        <div className={styles.directory_menu}>
            {
                menuItems.map(({ title, imageUrl, id, size, linkUrl }) => (
                    <MenuItem_74 key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                ))
            }
        </div>
    )
}

export default Directory2_74;