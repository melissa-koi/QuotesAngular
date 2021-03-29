import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quote:Quotes[] = [
    new Quotes('quoted', 'named' ,'authored',new Date(2021,3,14))
  ];

  toggleDetails(index) {
    this.quote[index].showAuthor = !this.quote[index].showAuthor;
  }

  addNewQuote(quotes) {
    quotes.completeDate = new Date (quotes.completeDate)
    this.quote.push(quotes);
  }

  deleteQuote(isComplete, index) {
    if(isComplete) {
      let toDelete= confirm(`Are you sure you want to delete this quote?`)

      if(toDelete) {
        this.quote.splice(index,1);
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
