import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external modules
import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

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
      MatToolbarModule,
      MatInputModule,
      MatIconModule,
      FormsModule,
      MatCardModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
