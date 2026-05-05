import { Routes } from '@angular/router';
import { TodoSignal } from './todo-signal/todo-signal';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo-signal/todo-signal').then((m) => m.TodoSignal),
  },
  {
    path: 'welcome',
    loadComponent: () => import('./component/welcome/welcome').then((m) => m.Welcome),
  },
  {
    path: 'rxjs',
    loadComponent: () => import('./rxjs-operators/rxjs-operators').then((m) => m.RxjsOperators),
  },
  {
    path: '**',
    redirectTo: 'todo',
  },
];
