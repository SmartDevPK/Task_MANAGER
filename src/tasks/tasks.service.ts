import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './create_data.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description, status } = createTaskDto;

    const task = this.tasksRepository.create({
      title,
      description,
      status,
    });

    await this.tasksRepository.save(task);
    return task;
  }
}
