import { Component, computed, effect, input, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-welcome',
  imports: [FormsModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  protected readonly title = signal('Welcome to angular 21!');
  readonly count = signal(0);
  readonly myName = signal('Asif');
  blackColor: string = 'black';
  //speed
  speed = signal(0);
  // list
  items = signal([1, 2, 3, 4]);
  // computed signal
  lengthModel = 0;
  heightModel = 0;
  length = signal(0);
  width = signal(0);
  readonly total = computed(() => this.length() * this.width());
  //calculate are
  calCulateArea() {
    if (!this.lengthModel || !this.heightModel) {
      alert('Please enter valid number');
      return;
    }
    this.length.set(Number(this.lengthModel) + 10);
    this.width.set(Number(this.heightModel));
    this.lengthModel = 0;
    this.heightModel = 0;
  }
  constructor() {
    effect(() => {
      this.title.set('Angular Architect!');
      this.items.update((arr) => [...arr, 5000]);
      console.log('Total Area is:: ', this.total);
      if (this.speed() > 0 && this.speed() < 70) {
        this.blackColor = 'green';
      }
      if (this.speed() >= 71 && this.speed() < 120) {
        this.blackColor = 'red';
      }
    });
  }

  increment() {
    this.count() < 15 && this.count.update((v) => v + 1);
  }
  decriment() {
    this.count() > 0 && this.count.update((v) => v - 1);
  }
  // event
  handleEvent(event: Event) {
    const input = event.target as any;
    //if (input instanceof HTMLInputElement) {
    console.log('Event type:', event.type);
    console.log('value', input.value);
    console.log('Element type', input.type);
    //}
  }
  updateValues() {
    this.myName.update((v) => v + 'khan');
  }
  // signal handson
  user = signal({ name: 'Asif khan' });
  chnageObjectVal() {
    this.user.update((u) => ({ ...u, name: 'Asif Engg' }));
  }
  increaseSpeed() {
    this.speed.set(this.speed() + 10);
  }
  // update new its depend on previous values
  user1: WritableSignal<string[]> = signal(['A', 'B', 'c']);
  showUser() {
    this.user1.update((items) => [...items, 'Khan']);
    console.log(this.user1());
  }
  // Get and set input values with signal
  inputText: WritableSignal<string> = signal('Asif');
  finalText: WritableSignal<string> = signal('');
  geTextBoxVal(event: Event) {
    let target = event.target as HTMLInputElement;
    this.inputText.set(target.value);
  }

  toggle: WritableSignal<boolean> = signal(true);
  flag: WritableSignal<boolean> = signal(false);
  onGetUserButton() {
    this.finalText.set(this.inputText());
    this.flag.set(true);
    this.inputText.set('');
  }
  showHide() {
    if (this.finalText()) {
      this.toggle.set(!this.toggle());
    }
  }
  //array of object
  userData = signal({
    name: 'asif',
    age: 30,
    email: 's@gmail.com',
  });
  geObjectTextVal(key: string, val: string) {
    this.userData.update((v) => ({ ...v, [key]: val }));
  }
  // Getter and settter the use Two-way binding
  myGetSetterName = signal('Asif Khan');
}
