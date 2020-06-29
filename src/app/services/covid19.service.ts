import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  baseUrl = 'https://api.covid19api.com/';

  constructor(private http: HttpClient) { }

  getSummary() {
    return this.http.get(this.baseUrl + 'summary').subscribe(data => {
      console.log(data);
    });
  }

  getCountry() {
    return this.http.get(this.baseUrl + 'dayone/country/ie/status/confirmed');
  }

}
