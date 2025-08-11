import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../../../state/counter.state';
// interface CounterState {
//   counter: number;
// }
@Component({
  selector: 'app-counter-output',
  imports: [],
  standalone: true,
  templateUrl: './counter-output.html',
  styleUrl: './counter-output.css',
})
export class CounterOutput implements OnInit {
  // @Input() childRecevier!:number;
  counter?: number;
  constructor(private store: Store<{ counter: CounterState }>) {}
  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    });
  }
}
