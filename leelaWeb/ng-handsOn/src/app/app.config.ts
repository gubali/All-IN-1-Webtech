


import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import routeConfig from '../app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './reducer/counter.reducer';
import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routeConfig),
    provideStore({counter:counterReducer}),
    provideHttpClient()
  ],
};
