import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EopipeComponent } from './eopipe.component';

describe('EopipeComponent', () => {
  let component: EopipeComponent;
  let fixture: ComponentFixture<EopipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EopipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EopipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
