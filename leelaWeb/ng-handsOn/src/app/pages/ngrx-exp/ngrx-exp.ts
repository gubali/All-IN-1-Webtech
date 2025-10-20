import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  incriment,
  reset,
} from '../../store/actions/counter.actions';
import { ICounterState } from '../../store/state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CustomCounterInput } from '../../custom-counter-input/custom-counter-input';
import { getCounter } from '../../store/selectors/counter.selectors';
@Component({
  selector: 'app-ngrx-exp',
  imports: [CommonModule, CustomCounterInput],
  standalone: true,
  templateUrl: './ngrx-exp.html',
  styleUrl: './ngrx-exp.css',
})
export class NgrxExp implements OnInit {
  counter!: number;
  counterSubcription!: Subscription; // method 1
  counter$!: Observable<ICounterState>;
  constructor(private store: Store<{ counter: ICounterState }>) {}
  ngOnInit(): void {
    this.counterSubcription = this.store.select(getCounter).subscribe((res) => {
      console.log('Counter Value from Store:', res);
      this.counter = res;
    });
    // this.counter$ = this.store.select(getCounter);
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
  // below method is for method 1
  // ngOnDestroy(): void {
  //   if (this.counterSubcription) {
  //     this.counterSubcription.unsubscribe();
  //   }
  // }
}
