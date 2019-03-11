import { TestBed, inject } from '@angular/core/testing';

import { GruposService } from './grupos.service';

describe('GruposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GruposService]
    });
  });

  it('should be created', inject([GruposService], (service: GruposService) => {
    expect(service).toBeTruthy();
  }));
});
