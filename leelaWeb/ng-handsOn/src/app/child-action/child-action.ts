import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-action',
  imports: [],
  standalone: true,
  templateUrl: './child-action.html',
  styleUrl: './child-action.css',
})
export class ChildAction {
  @Output() onIncriment = new EventEmitter<void>();
  @Output() onDecriment = new EventEmitter<void>();
  @Output() onReset = new EventEmitter<void>();
  incriment() {
    this.onIncriment.emit();
  }
  decriment() {
    this.onDecriment.emit();
  }
  reset() {
    this.onReset.emit();
  }
}
