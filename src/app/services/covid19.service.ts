import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  baseUrl = 'https://api.covid19api.com/';
  altBaseUrl = 'https://covidapi.info/api/v1/country/';

  constructor(private http: HttpClient) { }

  getCountryStats(country: string) {
    return this.http.get(this.altBaseUrl + country + '/latest');
  }

  getCountry(country = 'ireland') {
    return this.http.get(this.baseUrl + 'dayone/country/' + country + '/status/confirmed');
  }

}
