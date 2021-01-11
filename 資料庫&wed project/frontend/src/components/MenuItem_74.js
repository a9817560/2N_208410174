import React from 'react'
import { Link } from 'react-router-dom';
import styles from  './MenuItem_74.module.scss'

const MenuItem_74 = ({ title, imageUrl, size, linkUrl }) => {
    let makeSize = (size === 'large') ? styles.large : ''; 
    return (
        <div 
          className={`${styles.menu_item} ${makeSize}`} 
        >
            <img className={styles.background_image} src={imageUrl} alt=""></img>
            <Link to={linkUrl} className={styles.content}>
                <h1 className={styles.title}>{title.toUpperCase()}</h1>
                <span className={styles.subtitle}>SHOP NOW</span>
            </Link>
        </div>
    )
}

export default MenuItem_74;
