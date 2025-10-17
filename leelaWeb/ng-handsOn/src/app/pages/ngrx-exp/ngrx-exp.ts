import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  incriment,
  reset,
} from '../../store/actions/counter.actions';
@Component({
  selector: 'app-ngrx-exp',
  imports: [],
  standalone: true,
  templateUrl: './ngrx-exp.html',
  styleUrl: './ngrx-exp.css',
})
export class NgrxExp implements OnInit {
  counter!: number;
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  ngOnInit(): void {
    this.store.select('counter').subscribe((res) => {
      this.counter = res.counter;
    });
  }
  onIncrement(): void {
    this.store.dispatch(incriment());
  }
  onDecrement(): void {
    this.store.dispatch(decrement());
  }
  onReset(): void {
    this.store.dispatch(reset());
  }
}
