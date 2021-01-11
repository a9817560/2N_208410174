import React from 'react';

import MenuItem_74 from './MenuItem_74'
import styles from './Directory_74.module.scss'

class Directory_74 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: '/shop_74/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: '/shop_74/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: '/shop_74/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: '/shop_74/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: '/shop_74/mens'
                }
            ]
        };
    }

    render() {
        console.log('data', this.state.sections);
        return (
            <div className={styles.directory_menu}>
                {
                    this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
                        <MenuItem_74 key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory_74;