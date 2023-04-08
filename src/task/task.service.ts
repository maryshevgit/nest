import {Body, Injectable} from "@nestjs/common";
import {ITask} from "@src/task/task.interface";
import {Task} from "@src/task/task.entity";

@Injectable()
export class TaskService {
    private tasks: ITask[] = [
        {id: 1, task: 'task1'},
        {id: 2, task: 'task2'}
    ]

    getTasks(): ITask[] {
        return this.tasks
    }

    getTaskById(id: string): ITask {
        return this.tasks.find(t => t.id === +id)
    }

    createTask(@Body('task') task: string): ITask {
        const newTask = new Task(task)
        this.tasks.push(newTask)
        return newTask
    }

    updateTask(id: string, task: ITask): ITask[] {
        const filterTasks = this.tasks.filter(t => t.id !== +id)
        this.tasks = [...filterTasks, task]
        return this.tasks
    }

    deleteTask(id: string) {
        return this.tasks = this.tasks.filter(t => t.id !== +id)
    }
}