import { Component, ViewChild} from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';
import { WeatherForecast } from '../models/interfaces/weather-forecast.interface';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(private fetchDataService: FetchDataService) {
  }

  @ViewChild(TestComponent, { static: false }) testChild: TestComponent;

  onClick(summary: string) {
    let temp = this.testChild.changeStyle(summary);
  }

  ngOnInit() {
    this.fetchDataService.getHttp().subscribe(result => {
      this.forecasts = result as WeatherForecast[];
    }, error => console.error(error));
  };
}


