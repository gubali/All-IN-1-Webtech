import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
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
    path: 'change-detection',
    loadComponent: () => import('./change-detect/change-detect').then((m) => m.ChangeDetect),
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];
