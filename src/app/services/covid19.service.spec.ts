/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Covid19Service } from './covid19.service';

describe('Service: Covid19', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Covid19Service]
    });
  });

  it('should ...', inject([Covid19Service], (service: Covid19Service) => {
    expect(service).toBeTruthy();
  }));
});
