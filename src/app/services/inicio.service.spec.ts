import { TestBed, inject } from '@angular/core/testing';

import { InicioService } from './inicio.service';

describe('InicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InicioService]
    });
  });

  it('should be created', inject([InicioService], (service: InicioService) => {
    expect(service).toBeTruthy();
  }));
});
