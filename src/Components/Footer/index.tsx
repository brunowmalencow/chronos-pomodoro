import styles from './styles.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="">Entenda como funciona a tecnica pomodoro</a>
            <p>&copy; {new Date().getFullYear()} Chronos Pomodoro. All rights reserved.</p>
        </footer>
    )
}