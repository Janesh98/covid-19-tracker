import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})

export class BarchartComponent implements OnInit {
  // chart settings
  title = 'covid19';
  errorMessage: string;
  type = 'LineChart';
  data: any = [];
  columnNames = ['Day', 'Daily Cases'];
  height = 500;
  dynamicResize = true;

  countryCode = 'ie';

  // covid stats
  totalCases: number;
  dailyTotalConfirmed: number[] = [];
  dailyNewConfirmed: number[] = [];

  constructor(private covid19: Covid19Service) { }

  ngOnInit() {
    //const { getCode, getName } = require('country-list');
    //console.log(getName('us'));
    //console.log(getCode('ireland'));
    this.getCountryAndCalculateDailyNewConfirmed();
  }

  sum(list: any) {
    let total = 0;
    for (const n of list) {
      total = total + n;
    }
    return total;
  }

  getSummary() {
    return this.covid19.getSummary();
  }

  getCountry() {
    this.covid19.getCountry()
    .subscribe(data => {
      const covid = Object.keys(data);

      for (const key of covid) {
        const cases = data[key].Cases;
        this.dailyTotalConfirmed.push(cases);
      }
    });
  }

  calculateDailyNewConfirmed() {
    const data = this.dailyTotalConfirmed;

    for (let i = 0; i < data.length - 1; i++) {
      const casesToday = data[i];
      const casesTomorrow = data[i + 1];

      this.dailyNewConfirmed.push(Math.abs(casesTomorrow - casesToday));
    }
    // this.drawChart();
  }

  getCountryAndCalculateDailyNewConfirmed() {
    this.covid19.getCountry()
    .subscribe(data => {
      const covid = Object.keys(data);

      for (const key of covid) {
        const cases = data[key].Cases;
        this.dailyTotalConfirmed.push(cases);
      }
      this.setTotalCases();
      this.calculateDailyNewConfirmed();
      //console.log(this.dailyNewConfirmed);
      this.data = this.generate_xy();
    });
  }

  setTotalCases() {
    this.totalCases = this.dailyTotalConfirmed[this.dailyTotalConfirmed.length - 1];
  }

  generate_xy() {
    const data = [];
    const cases = this.dailyNewConfirmed;
    for (let i = 0; i < cases.length; i++) {
      const x = i.toString();
      const y = cases[x];
      data.push([x, y]);
    }
    //console.log(data);
    return data;
  }

}