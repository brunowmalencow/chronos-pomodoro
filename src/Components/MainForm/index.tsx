import Ciclos from "../Ciclos";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";

import { PlayCircleIcon } from "lucide-react";

import { useTaskContext } from "../../Contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { useRef } from "react";
import { getNextCycle } from "../../Utils/getNextCycle";
import { getNextCycleType } from "../../Utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../Utils/formatSecondstoMinutes";

export default function MainForm() {
    const { state, setState } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)

    //Ciclos
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    function handleSubmitTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (taskNameInput.current === null) return

        //O trim() serve para acabar com os espaçamentos desnecessários
        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            alert('Digite sua tarefa')
            return
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptedDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining: secondsRemaining,
                formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask],
            }
        })
    }

    return (
        <form onSubmit={handleSubmitTask} className='form' action="">
            <div className="formRow">
                <DefaultInput
                    required
                    type='text'
                    id="meuInput"
                    placeholder='Digite sua tarefa'
                    ref={taskNameInput}
                />
            </div>

            <div className="formRow">
                <div>
                    Lorem ipsum dolor sit amet.
                </div>
            </div>

            {state.currentCycle > 0 && (
                <div className="formRow">
                    <Ciclos />
                </div>
            )}

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </div>
        </form>
    )
}