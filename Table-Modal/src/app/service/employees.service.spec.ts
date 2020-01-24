import { TestBed } from '@angular/core/testing';

import { EmployeService } from './employe.service';

describe('EmployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeService = TestBed.get(EmployeService);
    expect(service).toBeTruthy();
  });
});
