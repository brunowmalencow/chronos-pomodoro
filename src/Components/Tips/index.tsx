import { useTaskContext } from "../../Contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../Utils/getNextCycle"
import { getNextCycleType } from "../../Utils/getNextCycleType"

export default function Tips() {
    //Tipos
    const { state } = useTaskContext()
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    const tipsForWhenActiveTask = {
        workTime: <span>Foque por {state.config.workTime}min</span>,
        shortBreakTime: <span>Descanso por: {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Próximo descanso será longo</span>,
    }

    const tipsForNoActiveTask = {
        workTime: <span>Próximo Ciclo é de: {state.config.workTime}min</span>,
        shortBreakTime: <span>Próximo descanso é de: {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Descanso longo</span>,
    }

    return (
        <>
            {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    )
}