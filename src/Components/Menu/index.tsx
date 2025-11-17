import { HouseIcon, SettingsIcon, Sun, TimerIcon } from "lucide-react";

import styles from './styles.module.css'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            
            <a className={styles.menuLink}>
                <TimerIcon />
            </a>
            
            <a className={styles.menuLink}>
                <HouseIcon />
            </a>
            
            <a className={styles.menuLink}>
                <SettingsIcon />
            </a>
            
            <a className={styles.menuLink}>
                <Sun />
            </a>
            
        </nav>
    )
}