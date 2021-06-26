import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thirty',
  templateUrl: './thirty.component.html',
  styleUrls: ['./thirty.component.scss']
})
export class ThirtyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  comingSoonAlert() {
    alert("Coming Soon!");
  }

  // TODO: need to convert JS code to typescript
  // https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

}
