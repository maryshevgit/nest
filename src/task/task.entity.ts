import {ITask} from "@src/task/task.interface";

export class Task implements ITask{
    id: number
    task: string

    constructor(task: string) {
        this.task = task
        this.id = new Date().getTime()
    }
}