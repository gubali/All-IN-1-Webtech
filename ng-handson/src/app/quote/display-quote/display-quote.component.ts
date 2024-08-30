import { Component, OnInit } from '@angular/core';
import { QuoteServiceService } from '../../services/quote-service.service';

@Component({
  selector: 'app-display-quote',
  standalone: true,
  imports: [],
  templateUrl: './display-quote.component.html',
  styleUrl: './display-quote.component.less',
})
export class DisplayQuoteComponent implements OnInit {
  currentQuote: string = '';
  constructor(private quoteService: QuoteServiceService) {}
  ngOnInit(): void {
    this.quoteService.currentQuote.subscribe(
      (quote) => (this.currentQuote = quote)
    );
  }
}
