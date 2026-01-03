import { Injectable } from '@angular/core';
import { CreateTask } from '../components/create-task/create-task';
import { TaskDetails } from '../components/task-details/task-details';
import { CompletedTasks } from '../components/completed-tasks/completed-tasks';
import { Task } from '../../models/Task';
import { take } from 'rxjs';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class Taskservice {
  private task! : Task;
  private tasks! : Task[];
  addTask_To_Tasks(task : Task){
    for(let i of this.tasks){
         if(i === task){
            Swal.fire('Error','the task already exist',"error");
         }
    }   
  }
}
