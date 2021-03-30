import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counterNo1=0;
  counterNo2=0
  
  increaseBtn(){
    this.counterNo1+=1;
  }
  decreaseBtn(){
    this.counterNo2+=1;
  }
  reset() {
    this.counterNo1=0;
    this.counterNo2=0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
