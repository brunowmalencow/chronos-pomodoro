import styles from './styles.module.css'
import type { HomeProps } from '../../pages/Home'

export default function Contador({state}: HomeProps) {
    return (
        <div className={styles.contador}>
            {state.formatedSecondsRemaining}
        </div>
    )
}