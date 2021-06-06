import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifUserComponent } from './notif-user.component';

describe('NotifUserComponent', () => {
  let component: NotifUserComponent;
  let fixture: ComponentFixture<NotifUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
