import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leela-ngrx';
}
