import { useTaskContext } from '../../Contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../Utils/getNextCycle';
import { getNextCycleType } from '../../Utils/getNextCycleType';
import styles from './styles.module.css';

export default function Ciclos() {

    const { state } = useTaskContext()

    const cicleStep = Array.from({ length: state.currentCycle })

    const cycleDescriptionMap = {
        workTime: 'Foco na atividade',
        shortBreakTime: 'Pequeno descanso',
        longBreakTime: 'Descanso longo'
    }

    return (
        <div className={styles.cicloContainer}>
            <span>Ciclos</span>

            <div className={styles.pontosCiclos}>
                {
                    cicleStep.map( (_, index) => {
                        const nextCycle = getNextCycle(index)
                        const nextCycleType = getNextCycleType(nextCycle)

                        return(
                            <span
                                key={`${nextCycle}`} 
                                className={`${styles.cicloItem} ${styles[nextCycleType]}`}
                                aria-label={`${cycleDescriptionMap[nextCycleType]}`}
                                title={`${cycleDescriptionMap[nextCycleType]}`}
                            >
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}