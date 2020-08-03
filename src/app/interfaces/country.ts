export interface Country {
    country: string;
    countryInfo: CountryInfo;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    updated: number;
  }

export interface CountryInfo {
    _id: number;
    iso2: string;
    iso3: string;
    country: string;
    lat: number;
    long: number;
    flag: string;
  }
