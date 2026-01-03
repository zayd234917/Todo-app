import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTask } from "./components/create-task/create-task";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateTask],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Todo-app');
}
