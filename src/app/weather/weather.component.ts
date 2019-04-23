import { Component, OnInit, Input } from '@angular/core';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

export class Clouds {

  public arrayclouds: Object[];
 };


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
@Input() view;
@Input() cityName;
url:string;
dateTime:Date;
date:string;
week: string[]= [
  'Sunday',
  'Monday',
  'tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

  constructor() { }

  ngOnInit() {
  this.url = 'http://openweathermap.org/img/w/' + this.view.weather[0].icon + '.png';
  this.dateTime = new Date(this.view.dt_txt);
this.date = this.week[this.dateTime.getDay()];




  }



}
