import { ChangeDetectorRef, Component } from '@angular/core';
import { ChildAction } from '../child-action/child-action';
import { ChildOutput } from '../child-output/child-output';
import { OnpushStratetgy } from '../onpush-stratetgy/onpush-stratetgy';

@Component({
  selector: 'app-data-sharing',
  imports: [ChildAction, ChildOutput, OnpushStratetgy],
  standalone: true,
  templateUrl: './data-sharing.html',
  styleUrl: './data-sharing.css',
})
export class DataSharing {
  counter: number = 1;
  user = { name: 'Asif' };
  constructor(private changeRef: ChangeDetectorRef) {}
  incriment() {
    if (this.counter < 10) {
      this.counter++;
    }
  }
  decriment() {
    if (this.counter <= 0) {
      alert('Counter cannot be negative');
      return;
    }
    this.counter--;
  }
  reset() {
    this.counter = 0;
  }
  mutateObj() {
    this.user = { ...this.user, name: 'Haniya Asif' };
  }
}
