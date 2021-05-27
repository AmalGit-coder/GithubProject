import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerCvComponent } from './deposer-cv.component';

describe('DeposerCvComponent', () => {
  let component: DeposerCvComponent;
  let fixture: ComponentFixture<DeposerCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeposerCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposerCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
