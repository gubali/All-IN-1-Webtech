import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './component/p2c/counter/counter';

@Component({
  selector: 'app-root',
  imports: [Counter],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ngrx-tutorial';
}
