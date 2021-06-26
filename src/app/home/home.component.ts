import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  tabSelected!: number;

  ngOnInit(): void {
  }
  
  tabChange(event: any) {
    this.tabSelected = event.index;
    if(event.index== 0){
      // console.log('Tab1 is selected! ' + event.index);
    }else{
      // console.log('Tab1 is not selected! ' + event.index)
    }
  }

}
