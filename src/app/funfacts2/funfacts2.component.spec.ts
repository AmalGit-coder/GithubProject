import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funfacts2Component } from './funfacts2.component';

describe('Funfacts2Component', () => {
  let component: Funfacts2Component;
  let fixture: ComponentFixture<Funfacts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Funfacts2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Funfacts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
