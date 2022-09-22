import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }
  getWeatherData(): Observable<any>{
    let lat= 54.51969;
    let lon= 18.5357;
    let apiId= 'e6ef5ca54f5f196730b05d4fa9121134';
    let queryString= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiId}`;
    return this.http.get(queryString);
  }
}
