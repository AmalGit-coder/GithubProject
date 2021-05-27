import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCandidateComponent } from './profil-candidate.component';

describe('ProfilCandidateComponent', () => {
  let component: ProfilCandidateComponent;
  let fixture: ComponentFixture<ProfilCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
