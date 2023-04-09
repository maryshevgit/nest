import { Status } from '@src/task/task.interface';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'название обязательно' })
  @IsNotEmpty({ message: 'название обязательно' })
  task: string;

  @IsOptional()
  @IsString({ each: true, message: 'Теги должны быть строчными' })
  tags?: string[];

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
