import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../Utils/formatSecondstoMinutes";
import { getNextCycle } from "../../Utils/getNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel): TaskStateModel {

    switch (action.type) {
        case TaskActionTypes.START_TASK: {
            const newTask = action.payload
            const nextCycle = getNextCycle(state.currentCycle)
            const secondsRemaining = newTask.duration * 60

            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining: secondsRemaining,
                formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask],
            }
        }
        case TaskActionTypes.INTERRUPT_TASK: {
            return state
        }
        case TaskActionTypes.RESET_STATE: {
            return state
        }
    }

    // SEMPRE DEVE RETORNAR O ESTADO (state)
    return state
}