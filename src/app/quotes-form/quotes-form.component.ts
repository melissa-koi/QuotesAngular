import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.scss']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quotes("","","");
  @Output() addNewQuote = new EventEmitter< Quotes>()

  submitQuote() {
    this.addNewQuote.emit(this.newQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
