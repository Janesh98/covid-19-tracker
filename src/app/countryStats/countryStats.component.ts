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
    // this.getCountryStats('IRL');
    this.getTest('ireland');
  }

  getTest(country: string) {
    this.covid19.getTest(country).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.confirmed = data['cases'];
      // tslint:disable-next-line: no-string-literal
      this.recovered = data['recovered'];
      // tslint:disable-next-line: no-string-literal
      this.deaths = data['deaths'];
    });
  }

}
