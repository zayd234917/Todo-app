import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Taskservice } from '../../services/taskservice';
import { Task } from '../../../models/Task';
@Component({
  selector: 'app-create-task',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css',
})
export class CreateTask {
 task_name! : string;
 task_descreption! : string;
  isClicked : boolean = false;  
    public get task_n() : string {
      return this.task_name;
    }
    
    public get task_d() : string {
      return this.task_descreption;
    }
    
    
    constructor(){}
     
  create(){
         this.isClicked = true;
  }
     
}
