import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './create_data.dto';
import { updateTaskStatusDto } from './update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch(':id/status')
   async updateTaskStatus(
    @Param('id') id: string,
    @Body() UpdateTaskStatusDto: updateTaskStatusDto
   ): Promise<Task> {
    return this.tasksService.updateTaskStatus(+id, UpdateTaskStatusDto.status)
   }


   @Delete(':id')
async deleteTask(@Param('id')id: string): Promise<void> {
  return this.tasksService.deleteTask(+id);
}


   
}

