import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChatbotComponent } from './test-chatbot.component';

describe('TestChatbotComponent', () => {
  let component: TestChatbotComponent;
  let fixture: ComponentFixture<TestChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestChatbotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
