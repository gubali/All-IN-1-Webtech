import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SignalService {
  public data: any;
  constructor() {}
  // setData(data: any) {
  //   this.data = data;
  //   console.log('aass', this.data);
  // }
  // getData() {
  //   return this.data;
  // // }
  // quote = new BehaviorSubject({});
  // currentQuote = this.quote.asObservable();
  updateQuote(newQuote: any) {
    this.data = newQuote;
  }
  get() {
    return this.data;
  }
}
