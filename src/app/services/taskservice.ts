import { Injectable } from '@angular/core';
import { Task } from '../../models/Task';
import { filter, take } from 'rxjs';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class Taskservice {
  
   tasks : Task[] = [];
  addTask_To_Tasks(title : string){
     this.tasks.push({task_name : title ,task_status : false});
  }
  deleteTask(title:string){
     this.tasks = this.tasks.filter(t => t.task_name !== title);
     console.log(this.tasks);
  }
  Completed(title : string){
    for(let i of this.tasks){
      if(i.task_name= title) {i.task_status = !i.task_status;}
    
  }
 
  }
  getTasks() : Task[]{
    return this.tasks;
  }
}
