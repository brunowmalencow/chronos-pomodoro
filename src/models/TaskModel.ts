import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string; 
    duration: number;
    completed?: boolean;
    startDate: number;
    completeDate: number | null;
    interruptedDate: number | null;
    type: keyof TaskStateModel['config'];
}