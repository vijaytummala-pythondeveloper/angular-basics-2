import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylebindingexampleComponent } from './stylebindingexample.component';

describe('StylebindingexampleComponent', () => {
  let component: StylebindingexampleComponent;
  let fixture: ComponentFixture<StylebindingexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylebindingexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylebindingexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
