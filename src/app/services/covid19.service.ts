import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  url = 'https://api.covid19api.com/';
  altUrl = 'https://corona.lmao.ninja/v2/countries/';

  constructor(private http: HttpClient) { }

  getCountry(country = 'ireland') {
    return this.http.get(this.url + 'dayone/country/' + country + '/status/confirmed');
  }

  getTest(country) {
    return this.http.get(this.altUrl + country);
  }

}
