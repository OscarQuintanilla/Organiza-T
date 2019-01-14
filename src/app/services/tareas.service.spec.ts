import { TestBed, inject } from '@angular/core/testing';

import { TareasService } from './tareas.service';

describe('TareasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareasService]
    });
  });

  it('should be created', inject([TareasService], (service: TareasService) => {
    expect(service).toBeTruthy();
  }));
});
