import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quote:Quotes[] = [
   {quote:"this",name:"name",author:"author"}
];


  addNewGoal(quotes) {
    this.quote.push(quotes);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
