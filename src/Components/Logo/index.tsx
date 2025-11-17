import { TimerIcon } from "lucide-react";

import styles from "./styles.module.css";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <a className={styles.logoLink}>
                
                <TimerIcon />
                
                <span>
                    CHRONOS
                </span>
            
            </a>
        </div>
    );
}