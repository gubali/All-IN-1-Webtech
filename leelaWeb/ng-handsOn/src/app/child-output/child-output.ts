import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child-output',
  imports: [],
  standalone: true,
  templateUrl: './child-output.html',
  styleUrl: './child-output.css',
})
export class ChildOutput {
  @Input() clickCount!: number;
}
