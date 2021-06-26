import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FatService } from '../services/fat.service';
import { BraapSearchParkBeginner, Datum } from '../services/braap-search-park-beginner';

@Component({
  selector: 'app-fat',
  templateUrl: './fat.component.html',
  styleUrls: ['./fat.component.scss']
})
export class FatComponent implements OnInit {

  constructor(private fatService: FatService) { }

  datum: Array<Datum> = [];

  long = 0;
  lat = 0;

  ngOnInit(): void {
    this.initParksList();
  }

  initParksList() {
    this.fatService.mockSearchForParks().subscribe(data1 => {
      let braapSearchParkBeginner: BraapSearchParkBeginner = data1;
      this.datum = braapSearchParkBeginner.data;
      this.long= +this.datum[0].Lng;
      this.lat= +this.datum[0].Lat;
      // console.log("data: " + JSON.stringify(braapSearchParkBeginner));
    }, data2 => {

    });
  }

  changeLocation(lng: string, lat: string) {
    this.long = +lng;
    this.lat = +lat;
  }

  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;

  // constructor(private _formBuilder: FormBuilder) {}

  // ngOnInit() {
  //   this.firstFormGroup = this._formBuilder.group({
  //     firstCtrl: ['', Validators.required]
  //   });
  //   this.secondFormGroup = this._formBuilder.group({
  //     secondCtrl: ['', Validators.required]
  //   });
  // }

}
