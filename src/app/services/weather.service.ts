import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '653ec38ccc56d254339a1c306706156a';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/find?q=`;

  }

  getWeather(cityName: string, unit: string) {
    return this.http.get(`${this.URI}${cityName}&appid=${this.apiKey}&units=${unit}`);
  }
}
