import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-remove-quote',
  templateUrl: './remove-quote.component.html',
  styleUrls: ['./remove-quote.component.css']
})
export class RemoveQuoteComponent implements OnInit {

  @Input() quoteInfo : Quote;
  @Output() remove = new EventEmitter<boolean>();

  deleteQuote(toDelete:boolean){
    this.remove.emit(toDelete)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
