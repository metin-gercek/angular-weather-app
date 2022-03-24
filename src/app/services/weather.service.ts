import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  uri: string = '';
  apiKey = '1cb6ace31e50401f28b864f0b23fdc68';


  constructor(private http: HttpClient) {
    this.uri =  `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
   }

   getWether(cityName: string) {
    return this.http.get(`${this.uri}${cityName}`);

   }
}
