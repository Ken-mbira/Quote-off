import { Injectable } from '@angular/core';
import { QuoteList } from '../quote-info/quote-info';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  getList(){
    return QuoteList
  }

  constructor() { }
}
