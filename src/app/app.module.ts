import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// external modules
import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CountryStatsComponent } from './countryStats/countryStats.component';

@NgModule({
   declarations: [
      AppComponent,
      BarchartComponent,
      ToolbarComponent,
      CountryStatsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      GoogleChartsModule,
      BrowserAnimationsModule,
      MatToolbarModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
