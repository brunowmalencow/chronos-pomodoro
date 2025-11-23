import { useEffect, useState } from "react"
import { initialTaskState } from "./initalTaskState"
import { TaskContext } from "./TaskContext"

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, setState] = useState(initialTaskState)

    useEffect(() => {
        console.log(initialTaskState);
        
    }, [state])

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    )
}
