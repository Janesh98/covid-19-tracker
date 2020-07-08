import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-country-stats',
  templateUrl: './countryStats.component.html',
  styleUrls: ['./countryStats.component.css']
})
export class CountryStatsComponent implements OnInit {

  country: string;

  confirmed: number;
  recovered: number;
  deaths: number;
  countryCode: string;
  flag: string;

  constructor(private covid19: Covid19Service, private shared: SharedService) { }

  ngOnInit() {
    this.shared.currentMessage.subscribe(message => this.updateCountry(message));
    this.getCountryStats('ireland');
  }

  updateCountry(country: string) {
    this.country = country;
    this.getCountryStats(country);
  }

  getCountryStats(country: string) {
    this.covid19.getCountryStats(country).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.flag = data['countryInfo']['flag'];
      // tslint:disable-next-line: no-string-literal
      this.confirmed = data['cases'];
      // tslint:disable-next-line: no-string-literal
      this.recovered = data['recovered'];
      // tslint:disable-next-line: no-string-literal
      this.deaths = data['deaths'];
    });
  }

}
