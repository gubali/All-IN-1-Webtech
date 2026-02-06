import { Component } from '@angular/core';
import { CounterButtons } from '../counter-buttons/counter-buttons';
import { CounterOutputs } from '../counter-outputs/counter-outputs';

@Component({
  selector: 'app-counter',
  imports: [CounterButtons, CounterOutputs],
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter: number = 0;
  onIncriment() {
    this.counter++;
  }
  onDecriment() {
    this.counter--;
  }
  onReset() {
    this.counter = 0;
  }
}
