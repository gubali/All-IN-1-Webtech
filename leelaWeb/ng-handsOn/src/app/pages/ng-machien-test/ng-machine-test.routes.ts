import { Routes } from '@angular/router';
import { NgMachienTest } from './ng-machien-test';
export const NgMachineTestRoute: Routes = [
  {
    path: '',
    component: NgMachienTest,
    children: [
      { path: '', redirectTo: 'todo', pathMatch: 'full' },
      {
        path: 'todo',
        loadComponent: () =>
          import('./todo-list/todo-list').then((m) => m.TodoList),
      },
    ],
  },
];
