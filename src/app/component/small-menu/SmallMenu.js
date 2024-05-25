import React from 'react'
import styles from './smallMenu.module.css'
const SmallMenu = ({name,desc}) => {
    return (
        <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2>
                {name} <span>-&gt;</span>
            </h2>
            <p>{desc}</p>
        </a>
    )
}

export default SmallMenu