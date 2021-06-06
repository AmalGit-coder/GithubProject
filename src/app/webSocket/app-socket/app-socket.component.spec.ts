import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSocketComponent } from './app-socket.component';

describe('AppSocketComponent', () => {
  let component: AppSocketComponent;
  let fixture: ComponentFixture<AppSocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
