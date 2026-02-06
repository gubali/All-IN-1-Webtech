import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-outputs',
  imports: [],
  standalone: true,
  templateUrl: './counter-outputs.html',
  styleUrl: './counter-outputs.css',
})
export class CounterOutputs {
  @Input() counter!: number;
}
