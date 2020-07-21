import { Component, OnInit, Input } from '@angular/core';
import { WeatherForecast } from '../models/interfaces/weather-forecast.interface';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Input() forecasts: WeatherForecast[];

}
