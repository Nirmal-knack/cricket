import { TestBed } from '@angular/core/testing';

import { GetDatasService } from './get-datas.service';

describe('GetDatasService', () => {
  let service: GetDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
