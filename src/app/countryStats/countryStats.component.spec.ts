/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountryStatsComponent } from './countryStats.component';

describe('CountryStatsComponent', () => {
  let component: CountryStatsComponent;
  let fixture: ComponentFixture<CountryStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
