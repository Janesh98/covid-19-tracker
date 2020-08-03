import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-country-totals-table',
  templateUrl: './countryTotalsTable.component.html',
  styleUrls: ['./countryTotalsTable.component.css']
})

export class CountryTotalsTableComponent implements OnInit {
  displayedColumns: string[] = ['country', 'confirmed', 'recovered', 'deaths'];
  countries: Country[] = [];

  constructor(private covid: Covid19Service) { }

  ngOnInit() {
    this.getCountriesTotals();
  }

  getCountriesTotals() {
    this.covid.getCountriesTotals().subscribe((countries: Country[]) => {
      console.log(countries);
      this.countries = countries;
    });
  }

}
