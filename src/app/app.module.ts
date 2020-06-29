import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// external modules
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
   declarations: [
      AppComponent,
      BarchartComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      GoogleChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
