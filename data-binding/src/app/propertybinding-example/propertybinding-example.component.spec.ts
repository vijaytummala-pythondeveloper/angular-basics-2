import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingExampleComponent } from './propertybinding-example.component';

describe('PropertybindingExampleComponent', () => {
  let component: PropertybindingExampleComponent;
  let fixture: ComponentFixture<PropertybindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertybindingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertybindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
