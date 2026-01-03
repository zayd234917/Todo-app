import { Component } from '@angular/core';
import { Task } from '../../../models/Task';
import { Taskservice } from '../../services/taskservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
      newTask : string = '';
      constructor(private service : Taskservice){

      }
      addTask(){
        this.service.addTask_To_Tasks(this.newTask);
        console.log(this.service.tasks);
        this.newTask = '';
      }
}
