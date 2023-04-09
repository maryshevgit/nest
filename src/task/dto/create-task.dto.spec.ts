import { plainToInstance } from 'class-transformer';
import { CreateTaskDto } from './create-task.dto';
import { validate } from 'class-validator';
import { Status } from '@src/task/task.interface';

describe('create-task.dto', () => {
  let dto;
  beforeAll(() => {
    dto = {
      task: '',
      tags: [],
      status: '',
    };
  });
  it('task пустая', async () => {
    const ofImportDto = plainToInstance(CreateTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('task')).toBeTruthy();
  });
  it('task не пустая', async () => {
    dto.task = 'какая-то таска';
    const ofImportDto = plainToInstance(CreateTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('task')).toBeFalsy();
  });
  it('tags не каждый элемент является строкой', async () => {
    dto.tags = ['312', 432];
    const ofImportDto = plainToInstance(CreateTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('tags')).toBeTruthy();
    expect(dto.tags.every((el) => typeof el === 'string')).toBeFalsy();
  });
  it('tags каждый элемент является строкой', async () => {
    dto.tags = ['312', 'das'];
    expect(dto.tags.every((el) => typeof el === 'string')).toBeTruthy();
  });
  it('Тип статуса является значением enum Status', async () => {
    dto.status = Status.ERROR;
    const ofImportDto = plainToInstance(CreateTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('status')).toBeFalsy();
    expect(dto.status).toBe('error');
  });
  it('Тип статуса не является значением enum Status', async () => {
    dto.status = 'PROc';
    const ofImportDto = plainToInstance(CreateTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('status')).toBeTruthy();
  });
});
