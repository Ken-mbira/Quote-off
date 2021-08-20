import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {
quoteInfo : Quote[] = [
  new Quote("Albert Einstein",1,"Physicist", 0, 0,"The important thing is to not stop questioning. Curiosity has its own reason for existing.",new Date(1920,3,2))
];
toggleDetails(index){
this.quoteInfo[index].showDetails = !this.quoteInfo[index].showDetails;
}

  constructor() { }

  ngOnInit(): void {
  }

}
