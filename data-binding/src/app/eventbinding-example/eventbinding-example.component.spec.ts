import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingExampleComponent } from './eventbinding-example.component';

describe('EventbindingExampleComponent', () => {
  let component: EventbindingExampleComponent;
  let fixture: ComponentFixture<EventbindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbindingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
