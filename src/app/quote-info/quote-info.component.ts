import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {
  quoteInfo : Quote[] = [
    new Quote("Albert Einstein",1,"Theoretical Physicist","The important thing is to not stop questioning. Curiosity has its own reason for existing.",new Date(1920,3,2),"Ken Mbira"),
    new Quote("Elon Musk",2,"CEO of Tesla Motors", "When something is important enough, you do it even if the odds are not in your favour.",new Date(2015,3,6),"Ken Mbira")
  ];
  upVote(index){
  this.quoteInfo[index].upvoteValue += 1;
  };
  downVote(index){
    this.quoteInfo[index].downvoteValue -= 1;
  };
  toggleDetails(index){
  this.quoteInfo[index].showDetails = !this.quoteInfo[index].showDetails;
  };
  quoteDelete(remove, index){
    if(remove){
      this.quoteInfo.splice(index,1);
    }
  }
  createQuote(quote){
    quote.id = this.quoteInfo.length + 1;
    quote.dateAdded = new Date(quote.dateAdded)
    this.quoteInfo.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
