import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { QuoteOfTheDayComponent } from '../quote-of-the-day/quote-of-the-day.component';
import { HttpRequestComponent } from "../http-request/http-request.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, QuoteOfTheDayComponent, HttpRequestComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
