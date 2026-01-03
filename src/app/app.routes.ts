import { Routes } from '@angular/router';
import { Todo } from './components/todo/todo';
import { Todolist } from './components/todolist/todolist';

export const routes: Routes = [
    {path:'',component:Todo},
    {path:'list',component:Todolist}
];
