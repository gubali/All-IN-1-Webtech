import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot({
        counter: counterReducer
      })
    )

  ]
};
