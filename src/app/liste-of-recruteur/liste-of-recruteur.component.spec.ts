import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOfRecruteurComponent } from './liste-of-recruteur.component';

describe('ListeOfRecruteurComponent', () => {
  let component: ListeOfRecruteurComponent;
  let fixture: ComponentFixture<ListeOfRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOfRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOfRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
