import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {WeatherComponent} from './weather/weather.component';
import { Clouds } from './weather/weather.component';
//import { RootObject } from './weatherData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maths';
  url:string;
  name: string;
   marks: any[];
   cloudData: RootObject;
   dayToDayData: List[]=[];
   temp:number;
   pressure:number;
   comment:string;



  constructor(private data: DataService) {
    // this.name='fg';
  }
  getData(){
    this.data.getFact(this.name).subscribe((d: RootObject)=>{

         this.cloudData = d;
         this.dayToDayData=[];
         this.dayToDayData.push(this.cloudData.list[4]);

         this.dayToDayData.push(this.cloudData.list[12]);
         this.dayToDayData.push(this.cloudData.list[20]);



         console.log ( this.cloudData );



     });



  }
  getCloudData()
  {

  }

}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Sys {
  pod: string;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
}

export interface RootObject {
  cod: string;
  message: number;
  cnt: number;
   list: List[];
  city: City;
}

