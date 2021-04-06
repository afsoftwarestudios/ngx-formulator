import { TestBed } from '@angular/core/testing';

import { FormulatorService } from './formulator.service';

describe('FormulatorService', () => {
  let service: FormulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
