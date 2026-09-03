import { TestBed } from '@angular/core/testing';

import { Principios } from './principios';

describe('Principios', () => {
  let service: Principios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Principios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
