import React from 'react'
import { Link } from 'react-router-dom';
import styles from  './MenuItem_74.module.scss'

const MenuItem3_74 = ({ name, remote_url, size, link_url }) => {
    let makeSize = (size === 'large') ? styles.large : ''; 
    return (
        <div 
          className={`${styles.menu_item} ${makeSize}`} 
        >
            <img className={styles.background_image} src={remote_url} alt=""></img>
            <Link to={link_url} className={styles.content}>
                <h1 className={styles.title}>{name.toUpperCase()}</h1>
                <span className={styles.subtitle}>SHOP NOW</span>
            </Link>
        </div>
    )
}

export default MenuItem3_74;
