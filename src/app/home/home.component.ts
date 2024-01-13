import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherData } from '../Models/WeatherData';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weatherData$ = new BehaviorSubject<WeatherData[]>([]);
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  getMockData() {
    this.dataService.getMockData().subscribe((data) => {
      this.weatherData$.next(data);
    });
  }
  removeData() {
    this.weatherData$.next([]);
  }
}
