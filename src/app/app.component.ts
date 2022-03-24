import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  location = { cityName: 'London'};
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather(this.location.cityName);
  }

  getWeather(cityName: string) {
    this.weatherService
      .getWeather(cityName)
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

  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value);

      cityName.value = '';

    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }

}
