import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  url = 'https://api.covid19api.com/';
  altUrl = 'https://corona.lmao.ninja/v2/countries/';
  diseaseUrl = 'https://disease.sh/v3/covid-19/';
  countryTotalsUrl = 'https://disease.sh/v3/covid-19/countries?yesterday=true&sort=cases&allowNull=false';

  constructor(private http: HttpClient) { }

  getCountry(country: string) {
    return this.http.get(this.url + 'dayone/country/' + country + '/status/confirmed');
  }

  getCountryStats(country: string) {
    return this.http.get(this.altUrl + country + '?yesterday=true&strict=true&query');
  }

  getCountryTimeline(country: string) {
    return this.http.get(this.diseaseUrl + 'historical/' + country + '?lastdays=120');
  }

  getCountriesTotals(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryTotalsUrl);
  }

}
