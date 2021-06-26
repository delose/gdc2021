import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bab',
  templateUrl: './bab.component.html',
  styleUrls: ['./bab.component.scss']
})
export class BabComponent implements OnInit {

  constructor() { }

  showBorrow: boolean = false;
  showBuy: boolean = false;

  ngOnInit(): void {
  }

  showBorrowOptions() {
    this.showBorrow = true;
    this.showBuy = false;
    // console.log("this.showBorrow: " + this.showBorrow + ", this.showBuy: " + this.showBuy);
  }

  showBuyOptions() {
    this.showBorrow = false;
    this.showBuy = true;
    // console.log("this.showBorrow: " + this.showBorrow + ", this.showBuy: " + this.showBuy);

  }

  neitherOptions() {
    this.showBorrow = false;
    this.showBuy = false;
  }

}
