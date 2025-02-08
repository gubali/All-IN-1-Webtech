import { Component } from '@angular/core';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';

@Component({
  selector: 'app-counter',
  imports: [CounterOutputComponent, CounterButtonsComponent],
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
counter:number=0;

onIncriment(){
  this.counter++;
}
onDecriment(){
  this.counter--;
}
onReset(){
  this.counter=0;
}
}
