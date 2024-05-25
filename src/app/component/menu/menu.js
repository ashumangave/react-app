import SmallMenu from '../small-menu/SmallMenu'
import styles from './menu.module.css'
const Menu = () => {
    return (
        <div className={styles.grid}>
            <SmallMenu name="BioData" desc="Create biodata in marathi" />
        </div>
    )
}

export default Menu