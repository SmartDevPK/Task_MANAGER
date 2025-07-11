import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './task.entity';
import { CreateTaskDto } from './create_data.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  /**
   * Create a new task
   */
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

  /**
   * Update the status of an existing task
   */
  async updateTaskStatus(
    id: number,
    status: 'OPEN' | 'IN_PROGRESS' | 'DONE',
  ): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({ id });

    if (!task) {
      throw new Error(`Task with ID ${id} not found`);
    }

    task.status = status;
    await this.tasksRepository.save(task);
    return task;
  }

  async deleteTask(id: number): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    if(result.affected === 0){
      throw new Error (`Task with ID ${id} not found`);
    }
  }
}
