import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})

export class BarchartComponent implements OnInit {
  country = 'ireland';

  // chart settings
  title = 'Covid19 Daily Cases';
  errorMessage: string;
  type = 'LineChart';
  data: any = [];
  columnNames = ['Day', 'Daily Cases'];
  height = 500;
  dynamicResize = true;

  // covid stats
  dailyTotalConfirmed: number[] = [];
  dailyNewConfirmed: number[] = [];

  constructor(private covid19: Covid19Service, private shared: SharedService ) { }

  ngOnInit() {
    this.shared.currentMessage.subscribe(message => this.updateCountry(message));
    this.getCountryAndCalculateDailyNewConfirmed(this.country);
  }

  updateCountry(country) {
    this.country = country;
    // const title = this.title.split(' ').slice(1);
    // this.title = country + ' ' +  title.join(' ');
    this.getCountryAndCalculateDailyNewConfirmed(country);
  }

  sum(list: any) {
    let total = 0;
    for (const n of list) {
      total = total + n;
    }
    return total;
  }

  getCountry(country) {
    this.covid19.getCountry(country)
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
    const dailyNewConfirmed: number[] = [];

    for (let i = 0; i < data.length - 1; i++) {
      const casesToday = data[i];
      const casesTomorrow = data[i + 1];

      dailyNewConfirmed.push(Math.abs(casesTomorrow - casesToday));
    }

    this.dailyNewConfirmed = dailyNewConfirmed;
    // this.drawChart();
  }

  getCountryAndCalculateDailyNewConfirmed(country) {
    this.covid19.getCountry(country)
    .subscribe(data => {
      const covid = Object.keys(data);
      const newDailyTotalConfirmed: number[] = [];

      for (const key of covid) {
        const cases = data[key].Cases;
        newDailyTotalConfirmed.push(cases);
      }
      this.dailyTotalConfirmed = newDailyTotalConfirmed;
      this.calculateDailyNewConfirmed();
      this.data = this.generate_xy();
    });
  }

  generate_xy() {
    const data = [];
    const cases = this.dailyNewConfirmed;
    for (let i = 0; i < cases.length; i++) {
      const x = i.toString();
      const y = cases[x];
      data.push([x, y]);
    }
    return data;
  }

}
