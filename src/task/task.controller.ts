import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ITask } from '@src/task/task.interface';
import { TaskService } from '@src/task/task.service';
import { CreateTaskDto } from '@src/task/dto/create-task.dto';
import { UpdateTaskDto } from '@src/task/dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private testService: TaskService) {}

  @Get()
  getTasks(): ITask[] {
    return this.testService.getTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): ITask {
    return this.testService.getTaskById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createTask(@Body() task: CreateTaskDto): ITask {
    return this.testService.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto): ITask[] {
    return this.testService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.testService.deleteTask(id);
  }
}
