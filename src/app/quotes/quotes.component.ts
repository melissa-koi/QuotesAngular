import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quote:Quotes[] = [
    new Quotes('quoted', 'named' ,'authored')
];

// toggleDetails(index) {
//   this.quote[index].showDescription = !this.quote[index].showDescription;
// }

  addNewQuote(quotes) {
    this.quote.push(quotes);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
