import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherForecast } from '../models/interfaces/weather-forecast.interface';
import { FetchDataService } from '../services/fetch-data.service';
import { MessageService } from '../services/message.service ';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private messageService: MessageService) { }

  @Input() forecasts: WeatherForecast[];

  @Output() onChanged = new EventEmitter<string>();
  change(increased: string) {
    this.onChanged.emit(increased);
    this.messageService.sendMessage(increased);
  }

}
