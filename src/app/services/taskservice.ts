import { Injectable } from '@angular/core';
import { CreateTask } from '../components/create-task/create-task';
import { TaskDetails } from '../components/task-details/task-details';
import { CompletedTasks } from '../components/completed-tasks/completed-tasks';
import { Task } from '../../models/Task';
@Injectable({
  providedIn: 'root',
})
export class Taskservice {
  private task! : Task;
  private tasks! : Task[];
}
