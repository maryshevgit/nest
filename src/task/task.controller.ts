import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ITask} from "@src/task/task.interface";
import {TaskService} from "@src/task/task.service";


@Controller('task')
export class TaskController {
        constructor(private testService: TaskService) {
        }

    @Get()
    getTasks(): ITask[] {
        return this.testService.getTasks()
    }

    @Get(':id')
    getTaskById(@Param('id') id: string): ITask {
        return this.testService.getTaskById(id)
    }

    @Post()
    createTask(@Body('task') task: string): ITask {
        return this.testService.createTask(task)
    }

    @Put(':id')
    updateTask(@Param('id') id: string, @Body('task') task: ITask): ITask[] {
        return this.testService.updateTask(id, task)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.testService.deleteTask(id)
    }
}