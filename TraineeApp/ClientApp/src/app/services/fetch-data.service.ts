import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../models/interfaces/weather-forecast.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getHttp(){
    return this.http.get(this.baseUrl + 'weatherforecast');
  }
}
