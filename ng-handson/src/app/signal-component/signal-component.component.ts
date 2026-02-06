import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  standalone: true,
  imports: [],
  templateUrl: './signal-component.component.html',
  styleUrl: './signal-component.component.less',
})
export class SignalComponentComponent {
  name: WritableSignal<string> = signal('ng-conference');
}
