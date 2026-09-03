import { TestBed } from '@angular/core/testing';

import { PrincipiosService } from './principios.service';

describe('PrincipiosService', () => {
  let service: PrincipiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit the principles concepts', () => {
    service.getConcepts().subscribe((concepts) => {
      expect(concepts.length).toBeGreaterThan(0);
    });
  });
});
