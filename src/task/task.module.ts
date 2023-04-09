import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TaskController } from '@src/task/task.controller';
import { TaskService } from '@src/task/task.service';
import { LoggerMiddleware } from '@src/task/middlewars/logger.middleware';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes(TaskController);
  }
}
