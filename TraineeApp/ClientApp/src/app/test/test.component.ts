import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../models/interfaces/weather-forecast.interface';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public forecasts: WeatherForecast[];


  constructor(private fetchDataService: FetchDataService) {

  }

  ngOnInit() {
    this.fetchDataService.getHttp().subscribe(result => {
      this.forecasts = result as WeatherForecast[];
    }, error => console.error(error));
  };
}
