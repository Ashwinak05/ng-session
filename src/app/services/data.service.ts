import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherData } from '../Models/WeatherData';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  token = 'sampleAuthenticationToken';
  errorMessage$ = new BehaviorSubject<string>('');
  isLoggedIn = false;
  formDirty$ = new BehaviorSubject<boolean>(false);

  getMockData(): Observable<WeatherData[]> {
    const tokenHeader = new HttpHeaders({
      Authorization: 'sampleAuthenticationToken@2023',
    });
    const token = new HttpHeaders({ token: this.token });
    return this.http.get<WeatherData[]>(
      'https://donetdemoapp.azurewebsites.net/WeatherForecast',
      { headers: tokenHeader }
    );
  }
}
