import { TestBed } from '@angular/core/testing';

import { AxiosGetServiceService } from './axios-get-service.service';

describe('AxiosGetServiceService', () => {
  let service: AxiosGetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiosGetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
