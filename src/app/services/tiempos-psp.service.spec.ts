import { TestBed } from '@angular/core/testing';

import { TiemposPSPService } from './tiempos-psp.service';

describe('TiemposPSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiemposPSPService = TestBed.get(TiemposPSPService);
    expect(service).toBeTruthy();
  });
});
