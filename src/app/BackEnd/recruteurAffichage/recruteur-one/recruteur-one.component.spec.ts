import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteurOneComponent } from './recruteur-one.component';

describe('RecruteurOneComponent', () => {
  let component: RecruteurOneComponent;
  let fixture: ComponentFixture<RecruteurOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruteurOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteurOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
