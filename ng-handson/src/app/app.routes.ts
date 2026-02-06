import { Routes } from '@angular/router';
import { RouterExampleComponent } from '../app/router/router-example/router-example.component';
export const routes: Routes = [
  {
    path: 'router',
    loadComponent: () =>
      import('./router/router-example/router-example.component').then(
        (m) => m.RouterExampleComponent
      ),
  },
];
