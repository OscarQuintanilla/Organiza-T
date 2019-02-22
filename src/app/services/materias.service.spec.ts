import { TestBed, inject } from '@angular/core/testing';

import { MateriasService } from './materias.service';

describe('MateriasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MateriasService]
    });
  });

  it('should be created', inject([MateriasService], (service: MateriasService) => {
    expect(service).toBeTruthy();
  }));
});
