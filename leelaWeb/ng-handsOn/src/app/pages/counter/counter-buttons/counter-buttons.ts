import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../../../action/counter.action';
import { CounterState } from '../../../state/counter.state';
// interface CounterState {
//   counter: number;
// }
@Component({
  selector: 'app-counter-buttons',
  imports: [],
  standalone: true,
  templateUrl: './counter-buttons.html',
  styleUrl: './counter-buttons.css',
})
export class CounterButtons implements OnInit {
  // @Output() incri = new EventEmitter<void>();
  // @Output() decri = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();
  constructor(private store: Store<{ counter: CounterState }>) {}
  ngOnInit(): void {}
  onIncriment(): void {
    this.store.dispatch(increment());
  }
  onDecriment(): void {
    this.store.dispatch(decrement());
  }
  onReset(): void {
    this.store.dispatch(reset());
  }
}
