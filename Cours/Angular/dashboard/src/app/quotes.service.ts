import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  url = 'https://api.quotable.io';
  constructor(private http: HttpClient) {}
    getQuote(): Observable<any> {
      return this.http.get(this.url, { headers: { Accept: 'application.json'}})
    }
  }
