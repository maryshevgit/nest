import { BadRequestException, Injectable } from '@nestjs/common';
import { ITask } from '@src/task/task.interface';
import { Task } from '@src/task/task.entity';
import { CreateTaskDto } from '@src/task/dto/create-task.dto';
import { UpdateTaskDto } from '@src/task/dto/update-task.dto';
import { NotFoundTaskException } from '@src/task/exceptions/not-found-exception.exception';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  getTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: number): ITask {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundTaskException();
    }
    return task;
  }

  createTask({ task, email, tags, status }: CreateTaskDto): ITask {
    const newTask = new Task(task, email, tags, status);
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, task: UpdateTaskDto): ITask[] {
    const filterTasks = this.tasks.filter((t) => t.id !== id);
    this.tasks = [...filterTasks, task as ITask];
    return this.tasks;
  }

  deleteTask(id: number) {
    return (this.tasks = this.tasks.filter((t) => t.id !== id));
  }

  getTasksByEmail(email: string): ITask[] {
    const tasks = this.tasks.filter((t) => t.email === email);
    if (!tasks || tasks?.length === 0) {
      throw new BadRequestException('Таски не были найдены');
    }

    return tasks;
  }
}
