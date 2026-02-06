import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuoteServiceService } from '../../services/quote-service.service';
@Component({
  selector: 'app-update-quote',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-quote.component.html',
  styleUrl: './update-quote.component.less',
})
export class UpdateQuoteComponent {
  constructor(private quoteServce: QuoteServiceService) {}
  quote: string = '';
  submitQuoteHandler() {
    this.quoteServce.updateQuote(this.quote);
    this.quote = '';
  }
}
