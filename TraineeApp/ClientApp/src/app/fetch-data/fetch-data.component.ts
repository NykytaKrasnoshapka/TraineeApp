import { Component, Inject, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';
import { WeatherForecast } from '../models/interfaces/weather-forecast.interface';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];


  constructor(private fetchDataService: FetchDataService) {

  }
  status: boolean = false;


  ngOnInit() {
    this.fetchDataService.getHttp().subscribe(result => {
      this.forecasts = result as WeatherForecast[];
    }, error => console.error(error));
  };

  onChanged(increased: any) {
    status=increased;
  }

  }


