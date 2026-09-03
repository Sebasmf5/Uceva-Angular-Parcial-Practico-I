import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptCard } from './concept-card';

describe('ConceptCard', () => {
  let component: ConceptCard;
  let fixture: ComponentFixture<ConceptCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConceptCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
