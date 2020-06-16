import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizecustomerComponent } from './customizecustomer.component';

describe('CustomizecustomerComponent', () => {
  let component: CustomizecustomerComponent;
  let fixture: ComponentFixture<CustomizecustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizecustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
