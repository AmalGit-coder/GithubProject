import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateAffichComponent } from './candidate-affich.component';

describe('CandidateAffichComponent', () => {
  let component: CandidateAffichComponent;
  let fixture: ComponentFixture<CandidateAffichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateAffichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateAffichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
