import React from 'react'
import styles from './Header.module.css'
import '../../bootstrap.min.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.boldHeading}>Talaash</h1>
        </div>
    )
}

export default Header
