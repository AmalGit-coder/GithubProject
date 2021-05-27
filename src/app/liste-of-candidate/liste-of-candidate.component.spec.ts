import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOfCandidateComponent } from './liste-of-candidate.component';

describe('ListeOfCandidateComponent', () => {
  let component: ListeOfCandidateComponent;
  let fixture: ComponentFixture<ListeOfCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOfCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOfCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
