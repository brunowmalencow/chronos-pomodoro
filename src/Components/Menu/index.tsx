import { HouseIcon, MoonIcon, SettingsIcon, Sun, TimerIcon } from "lucide-react";

import styles from './styles.module.css'
import { useState, useEffect } from "react";

export default function Menu() {
    //Como nesse useState só quero dois tipos (claro e escuro) uso entre os sinais
    // Para dizer os tipos que essa variável pode receber
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        const savedTheme = localStorage.getItem('theme');
        return (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme : 'light';
    });

    const nextThemeIcon = theme === 'dark' ? <Sun /> : <MoonIcon />;

    function toggleTheme() {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            setTheme('dark');
        }
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>

            <a className={styles.menuLink} aria-label="Home" title="Home">
                <TimerIcon />
            </a>

            <a className={styles.menuLink} aria-label="Historico" title="Historico">
                <HouseIcon />
            </a>

            <a className={styles.menuLink} aria-label="Settings" title="Settings">
                <SettingsIcon />
            </a>

            <a className={styles.menuLink} aria-label="Theme" title="Theme" onClick={toggleTheme}>
                {nextThemeIcon}
            </a>

        </nav>
    )
}