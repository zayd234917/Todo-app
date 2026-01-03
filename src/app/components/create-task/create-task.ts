import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/Task';
@Component({
  selector: 'app-create-task',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css',
})
export class CreateTask {

    
     
     Submit(){
     }
     
}
