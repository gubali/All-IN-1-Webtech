import { Component, OnInit } from '@angular/core';
import { CounterButtons } from '../counter-buttons/counter-buttons';
import { CounterOutput } from '../counter-output/counter-output';

@Component({
  selector: 'app-counter',
  imports: [CounterButtons, CounterOutput],
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter implements OnInit {
  counter: number = 0;
  ngOnInit(): void {}
  onIncriment(): void {
    if(this.counter >=11) return;
    this.counter++;
  }
  onDeccriment(): void {
    if(this.counter <=-1) return;
    this.counter--;
  }
  onReset(): void {
    this.counter = 0;
  }
}
