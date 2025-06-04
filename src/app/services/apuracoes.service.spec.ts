import { TestBed } from '@angular/core/testing';

import { ApuracoesService } from './apuracoes.service';

describe('ApuracoesService', () => {
  let service: ApuracoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApuracoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
