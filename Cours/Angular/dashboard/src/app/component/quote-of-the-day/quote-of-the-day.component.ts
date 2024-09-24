import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core'
import { QuotesService } from '../../quotes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote-of-the-day',
  standalone: true,
  imports: [],
  templateUrl: './quote-of-the-day.component.html',
  styleUrl: './quote-of-the-day.component.css'
})
export class QuoteOfTheDayComponent {
  quote:string ='';
  title = 'Quote of the day';
  constructor(private quotesServices: QuotesService) {}
  fetchQuote(): void {
    this.quotesServices.getQuote().subscribe((data:any) => {
      this.quote = data.quote;
    })
  }
}
