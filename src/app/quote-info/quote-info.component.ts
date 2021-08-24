import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';
import { QuoteService } from '../quote-service/quote.service';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

  quoteInfo:Quote[];

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

  displayInfo(index){
      this.quoteInfo[index].topVote = !this.quoteInfo[index].topVote
  }

  constructor(quoteService:QuoteService) {
    this.quoteInfo = quoteService.getList();
  }

  ngOnInit(): void {
  }

}
