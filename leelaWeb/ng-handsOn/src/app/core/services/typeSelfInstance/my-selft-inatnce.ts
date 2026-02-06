import { Injectable, signal } from '@angular/core';

@Injectable()
export class MySelftInatnce {
  name = signal<string>('Asif ');
}
