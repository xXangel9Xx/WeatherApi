import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaterComponentComponent } from './weater-component.component';

describe('WeaterComponentComponent', () => {
  let component: WeaterComponentComponent;
  let fixture: ComponentFixture<WeaterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
