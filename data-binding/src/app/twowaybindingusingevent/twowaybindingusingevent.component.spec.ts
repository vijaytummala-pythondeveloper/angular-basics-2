import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingusingeventComponent } from './twowaybindingusingevent.component';

describe('TwowaybindingusingeventComponent', () => {
  let component: TwowaybindingusingeventComponent;
  let fixture: ComponentFixture<TwowaybindingusingeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaybindingusingeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybindingusingeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
