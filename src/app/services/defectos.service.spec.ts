import { TestBed } from '@angular/core/testing';

import { DefectosService } from './defectos.service';

describe('DefectosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefectosService = TestBed.get(DefectosService);
    expect(service).toBeTruthy();
  });
});
