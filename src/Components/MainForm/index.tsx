import Ciclos from "../Ciclos";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";

import { PlayCircleIcon } from "lucide-react";

import { useTaskContext } from "../../Contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { useRef } from "react";

export default function MainForm() {
    const { setState } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)

    function handleSubmitTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (taskNameInput.current === null) return

        const taskName = taskNameInput.current.value.trim()
        //o trim() serve para acabar com os espaçamentos desnecessários

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
            duration: 1,
            type: 'workTime',
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: 1,
                secondsRemaining: secondsRemaining,
                formatedSecondsRemaining: '00:00',
                tasks:[...prevState.tasks, newTask],
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

            <div className="formRow">
                <Ciclos />
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </div>
        </form>
    )
}