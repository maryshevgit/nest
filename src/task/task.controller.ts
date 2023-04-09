import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ITask } from '@src/task/task.interface';
import { TaskService } from '@src/task/task.service';
import { CreateTaskDto } from '@src/task/dto/create-task.dto';
import { UpdateTaskDto } from '@src/task/dto/update-task.dto';
import { EmailPipe } from '@src/task/pipes/email.pipe';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks(): ITask[] {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number): ITask {
    return this.taskService.getTaskById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createTask(@Body() task: CreateTaskDto): ITask {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() task: UpdateTaskDto): ITask[] {
    return this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }

  @Get('email/:email')
  getTasksByEmail(@Param('email', EmailPipe) email: string): ITask[] {
    return this.taskService.getTasksByEmail(email);
  }
}
