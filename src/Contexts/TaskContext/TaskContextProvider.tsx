import { useEffect, useReducer } from "react"
import { initialTaskState } from "./initalTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducer"
import { TimerWorkerManager } from "../../Workers/TimerWorkerManager"

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState)

    const worker = TimerWorkerManager.getInstance()
    
    worker.onmessage((event) => {
        const countDownSeconds = event.data
        console.log('oioioioi', countDownSeconds);

        if(countDownSeconds <= 0){
            console.log("TAREFA COMPLETA");
            worker.terminate()
        }
    })

    useEffect(() => {
        if(!state.activeTask){
            console.log('Worker finalizado por nao ter tasks ativas');
            worker.terminate()
        }
        
        worker.postMessage(state)
    }, [worker, state])

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}
