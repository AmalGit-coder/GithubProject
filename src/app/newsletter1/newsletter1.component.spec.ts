import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsletter1Component } from './newsletter1.component';

describe('Newsletter1Component', () => {
  let component: Newsletter1Component;
  let fixture: ComponentFixture<Newsletter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newsletter1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Newsletter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
