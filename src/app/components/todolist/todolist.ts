import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Taskservice } from '../../services/taskservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/Task';

@Component({
  selector: 'app-todolist',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
})
export class Todolist {
      constructor(private service : Taskservice){
      }
      getTasks_task() : Task[]{
        return this.service.getTasks();
      }
      deleteTask(title : string){
        this.service.deleteTask(title);
      }
      Completed_task(title : string){
        this.service.Completed(title);
      }
}
