import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecruteurComponent } from './update-recruteur.component';

describe('UpdateRecruteurComponent', () => {
  let component: UpdateRecruteurComponent;
  let fixture: ComponentFixture<UpdateRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
