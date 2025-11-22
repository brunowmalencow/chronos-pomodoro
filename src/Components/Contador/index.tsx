import { useTaskContext } from '../../Contexts/TaskContext';
import styles from './styles.module.css'

export default function Contador() {
    const { state } = useTaskContext();

    return (
        <div className={styles.contador}>
            {state.formatedSecondsRemaining}
        </div>
    )
}