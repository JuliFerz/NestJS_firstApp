import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto'

@Controller('tasks')
export class TasksController {
  // se instancia en el constructor el tasksservice para poder utilizarlo dentro de la clase
  constructor(private tasksService: TasksService) { }

  @Get() // Si se llama con un get a /tasks, se ejecute lo que está aca
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) { // @Body() -> Trae info en formato JSON
    // console.log(newTask);
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id') // Especificarle cuál va a ser el campo que se va a usar para eliminar un registro
  deleteTask(@Param('id') id: string) { // NestJS toma el parametro de la url (se debe especificar el nombre del param) y lo guarda en el parametro "id"
    return this.tasksService.deleteTask(id)
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updatedFields)
  }
}
