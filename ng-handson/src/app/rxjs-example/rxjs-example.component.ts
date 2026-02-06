import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MessageService } from '../services/message.service';
import { QuoteServiceService } from '../services/quote-service.service';
@Component({
  selector: 'app-rxjs-example',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.less',
})
export class RxjsExampleComponent implements OnInit {
  currentQuote: string = '';

  constructor(
    private messageService: MessageService,
    private quoteService: QuoteServiceService
  ) {}
  ngOnInit(): void {
    //this.messageService.message$.subscribe(() => {});
    this.quoteService.currentQuote.subscribe(
      (quote) => (this.currentQuote = quote)
    );
  }
}
