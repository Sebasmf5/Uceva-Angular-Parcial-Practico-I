import { TestBed } from '@angular/core/testing';

import { ArquitecturaSoftwareService } from './arquitectura-software';

describe('ArquitecturaSoftwareService', () => {
  let service: ArquitecturaSoftwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquitecturaSoftwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit the architecture concepts', () => {
    service.getConcepts().subscribe((concepts) => {
      expect(concepts.length).toBeGreaterThan(0);
    });
  });
});
