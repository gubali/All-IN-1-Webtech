import {
  Component,
  computed,
  OnInit,
  Signal,
  signal,
  WritableSignal,
  effect,
} from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal-exp',
  imports: [],
  standalone: true,
  templateUrl: './signal-exp.html',
  styleUrl: './signal-exp.css',
})
export class SignalExp implements OnInit {
  count = signal(3);
  // writabl signal
  readonly myCounter: WritableSignal<number> = signal(2);
  // computed signal
  readonly doubleCount: Signal<number> = computed(() => this.myCounter() * 3);

  readonly mySignal = signal({ foo: 'bar' });
  readonly productPrceSignal = signal<number>(100);

  setNewValue() {
    this.mySignal.set({ foo: 'bar1' });
  }

  // signal - Reactive approach
  todos = signal<string[]>(['Task 1', 'Task 2', 'Task 3']);
  sizeLength = computed(() => this.todos().length);

  ngOnInit(): void {
    // this.count.set(30);
    console.log(this.count());
    this.myCounter.set(1000);
    // Todo List
    this.addToDolist();
    console.log(' this.addToDolist():', this.todos());
  }

  incriment() {
    if (this.count() < 10) {
      this.count.update((value) => value + 1);
    } else {
      return;
    }
  }
  descriment() {
    if (this.count() == 1) {
      this.count.update((value) => value - 1);
    } else {
      return;
    }
  }
  lazySignalEvaluation = computed(() => {
    console.log('lazy evaluation');
    return this.count() * 70;
  });
  getLazyEvaluation() {
    console.log(this.lazySignalEvaluation());
  }
  pluzLazy() {
    this.count.update((val) => val + 1);
  }
  constructor() {
    effect(() => {
      console.log('Effect triggered: ', this.productPrceSignal());
      console.log('Todo size length is', this.sizeLength());
    });
  }
  updateSignal() {
    this.productPrceSignal.set(10000);
    console.log('Signal updated to:', this.productPrceSignal());
  }
  addToDolist() {
    this.todos.update((list) => [...list, 'Task 4']);
  }
}
