import styles from './styles.module.css';

export default function Ciclos() {
    return (
        <div className={styles.cicloContainer}>
            <span>Ciclos</span>

            <div className={styles.pontosCiclos}>
                <span className={`${styles.cicloItem} ${styles.workTime}`}></span>
                <span className={`${styles.cicloItem} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cicloItem} ${styles.workTime}`}></span>
                <span className={`${styles.cicloItem} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cicloItem} ${styles.workTime}`}></span>
                <span className={`${styles.cicloItem} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cicloItem} ${styles.workTime}`}></span>
                <span className={`${styles.cicloItem} ${styles.longBreakTime}`}></span>
            </div>
        </div>
    )
}