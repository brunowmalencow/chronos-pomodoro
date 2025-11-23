import { useTaskContext } from '../../Contexts/TaskContext/useTaskContext';
import styles from './styles.module.css'

export default function Contador() {
    const { state } = useTaskContext();

    return (
        <div className={styles.contador}>
            {state.formatedSecondsRemaining}
        </div>
    )
}