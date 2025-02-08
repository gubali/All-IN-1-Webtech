import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  imports: [],
  standalone: true,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
@Input() counter:number=0;
}
