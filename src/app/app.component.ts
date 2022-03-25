import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  location = { cityName: '', unit: 'metric'};
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather(this.location.cityName, this.location.unit);
  }

  getWeather(cityName: string, unit: string) {
    this.weatherService
      .getWeather(cityName,unit)
      .subscribe(
        res => {
          console.log(res);

          this.weather = res;
        },
        err => {
          console.log(err);
        }


      );
  }

  submitLocation(cityName: HTMLInputElement, unit: HTMLSelectElement) {
    if (cityName.value && unit.value) {
      this.getWeather(cityName.value, unit.value);

      // cityName.value = '';
      // unit.value = '';

    } else {
      alert('Please. Insert coreect values');
    }
    // cityName.focus();
    // unit.focus();
    return false;
  }

}
