import { TestBed, inject } from '@angular/core/testing';

import { EvaluacionesService } from './evaluaciones.service';

describe('EvaluacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvaluacionesService]
    });
  });

  it('should be created', inject([EvaluacionesService], (service: EvaluacionesService) => {
    expect(service).toBeTruthy();
  }));
});
