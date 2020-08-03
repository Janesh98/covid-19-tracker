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
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CountryStatsComponent } from './countryStats/countryStats.component';
import { CountryTotalsTableComponent } from './countryTotalsTable/countryTotalsTable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   declarations: [
      AppComponent,
      BarchartComponent,
      ToolbarComponent,
      CountryStatsComponent,
      CountryTotalsTableComponent
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
      MatCardModule,
      MatTableModule,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
