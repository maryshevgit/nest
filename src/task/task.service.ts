import { Injectable } from '@nestjs/common';
import { ITask } from '@src/task/task.interface';
import { Task } from '@src/task/task.entity';
import { CreateTaskDto } from '@src/task/dto/create-task.dto';
import { UpdateTaskDto } from '@src/task/dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  getTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: string): ITask {
    return this.tasks.find((t) => t.id === +id);
  }

  createTask({ task, tags, status }: CreateTaskDto): ITask {
    const newTask = new Task(task, tags, status);
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, task: UpdateTaskDto): ITask[] {
    const filterTasks = this.tasks.filter((t) => t.id !== +id);
    this.tasks = [...filterTasks, task as ITask];
    return this.tasks;
  }

  deleteTask(id: string) {
    return (this.tasks = this.tasks.filter((t) => t.id !== +id));
  }
}
