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
  countryCode: string;
  flag: string;

  confirmed: number;
  recovered: number;
  deaths: number;

  todayCases: string;
  todayRecovered: string;
  todayDeaths: string;

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
      this.todayCases = data['todayCases'];
      this.todayRecovered = data['todayRecovered'];
      this.todayDeaths = data['todayDeaths'];
      this.flag = data['countryInfo']['flag'];
      this.confirmed = data['cases'];
      this.recovered = data['recovered'];
      this.deaths = data['deaths'];
    });
  }

}
