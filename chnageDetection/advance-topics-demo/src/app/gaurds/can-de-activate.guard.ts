import { CanDeactivateFn } from '@angular/router';
import { RxjsDemoComponent } from '../rxjs-demo/rxjs-demo.component';
export const canDeActivateGuard: CanDeactivateFn<any> = (
  component:RxjsDemoComponent,
  currentRoute,
  currentState,
  nextState
) => {
  if (component && component.canDeActivate) {
    return component.canDeActivate();
  }
  return true; // Default to true if component is undefined (due to lazy loading)
};