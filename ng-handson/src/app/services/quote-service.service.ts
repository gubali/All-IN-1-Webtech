import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class QuoteServiceService {
  constructor() {}
  quote = new BehaviorSubject('Example of BehaviorSubject:: Welcome');
  currentQuote = this.quote.asObservable();
  updateQuote(newQuote: any) {
    console.log('im quote service', newQuote);
    this.quote.next(newQuote);
  }
}
