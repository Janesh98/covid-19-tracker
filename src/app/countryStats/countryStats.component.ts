import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';

@Component({
  selector: 'app-country-stats',
  templateUrl: './countryStats.component.html',
  styleUrls: ['./countryStats.component.css']
})
export class CountryStatsComponent implements OnInit {

  confirmed: number;
  recovered: number;
  deaths: number;
  countryCode: string;

  constructor(private covid19: Covid19Service) { }

  ngOnInit() {
    this.getCountryStats('IRL');
  }

  getCountryStats(country: string) {
    this.covid19.getCountryStats(country).subscribe(data => {
      const key = Object.keys(data.result)[0];
      data = data.result[key];

      console.log(data);

      this.confirmed = data.confirmed;
      this.recovered = data.recovered;
      this.deaths = data.deaths;
    });
  }

}
