import { Component, EventEmitter, output, Output } from '@angular/core';
import { CounterOutputs } from '../counter-outputs/counter-outputs';

@Component({
  selector: 'app-counter-buttons',
  imports: [CounterOutputs],
  standalone: true,
  templateUrl: './counter-buttons.html',
  styleUrl: './counter-buttons.css',
})
export class CounterButtons {
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
  @Output() CallMehtodFromParent = new EventEmitter<void>();
  onIncriment() {
    this.increment.emit();
  }
  onDecriment() {
    this.decrement.emit();
  }
  onReset() {
    this.reset.emit();
  }
  CallMehtodFromParent1() {
    this.CallMehtodFromParent.emit();
  }
}
