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
  columnNames = ['Date', 'Daily Cases'];
  height = 500;
  dynamicResize = true;
  options = {
    // smooth data
    curveType : 'function',
    // set min y axis value to 0
    vAxis: {
      viewWindowMode: 'explicit',
      viewWindow: {
        min: 0
      }
  },
  };

  // covid stats
  dailyTotalConfirmed: number[] = [];
  dailyNewConfirmed: number[] = [];
  dates: string[] = [];

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
      const dates: string[] = [];

      for (const key of covid) {
        const cases = data[key].Cases;
        const date = data[key].Date;
        newDailyTotalConfirmed.push(cases);
        dates.push(date);
      }
      this.dailyTotalConfirmed = newDailyTotalConfirmed;
      this.dates = dates;
      this.calculateDailyNewConfirmed();
      this.data = this.generateXY();
    });
  }

  generateXY() {
    const data = [];
    const cases = this.dailyNewConfirmed;
    for (let i = 0; i < cases.length; i++) {
      const x = i.toString();
      const y = cases[x];
      let date = this.dates[i];
      date = this.formatDate(date);
      data.push([date, y]);
    }
    return data;
  }

  // format date to look nicer
  // 2020-02-29T00:00:00Z to 29/02/20
  formatDate(dateTime: string) {
    // get only date by removing time
    dateTime = dateTime.split('T')[0];

    // split into [year, month, day]
    let date = dateTime.split('-');

    // convert to d-m-y
    date = date.reverse();

    // shorten year from 2020 to 20
    date[2] = date[2].substring(2);

    return date.join('-');
  }

}
