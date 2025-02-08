import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decriment, incriment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  imports: [],
  standalone: true,
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css',
})
export class CounterButtonsComponent {
  // @Output() incriment = new EventEmitter();
  // @Output() decriment = new EventEmitter();
  // @Output() reset = new EventEmitter();
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  onIncriment() {
    // this.incriment.emit();
    this.store.dispatch(incriment());
  }
  onDecriment() {
    // this.decriment.emit();
    this.store.dispatch(decriment());
  }
  onReset() {
    // this.reset.emit();
    this.store.dispatch(reset());
  }
}
