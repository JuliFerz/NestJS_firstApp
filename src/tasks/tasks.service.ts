import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { UpdateTaskDto } from './dto/task.dto';
import { v4 } from 'uuid' // modelo V4 es para generar ids como string

@Injectable() // Se crean métodos para luego utilizarlos en el proyecto
export class TasksService {

  private tasks: Task[] = [ // se asigna a esta variable cómo va a ser la estructura de task (simula base de datos)
    {
      id: '1',
      title: 'first task',
      description: 'some task here',
      status: TaskStatus.PENDING
    }
  ];

  getAllTasks() {
    return this.tasks;
  }

  getTask(id: string) {
    const findTask = this.tasks.find(task => task.id === id);
    return findTask ? findTask : 'No se encontró tarea';
  }

  createTask(title: string, description: string) {
    const task = {
      'id': v4(),
      'title': title,
      'description': description,
      'status': TaskStatus.PENDING
    };
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getTaskById(id: string): Task { // Retorna un objeto de tipo Task
    return this.tasks.find(task => task.id === id);
  }

  // updateTask(id: string, updatedFields: UpdateTaskDto): Task {
  updateTask(id: string, updatedFields: UpdateTaskDto){
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedFields);
    this.tasks = this.tasks.map(task => task.id === id ? newTask : task) // como devuelve un nuevo array, se vuelve a asignar a tasks
    return newTask;
  }
}
