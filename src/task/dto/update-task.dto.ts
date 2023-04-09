import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Status } from '@src/task/task.interface';

export class UpdateTaskDto {
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
