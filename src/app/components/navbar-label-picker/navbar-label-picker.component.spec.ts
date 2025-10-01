import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLabelPickerComponent } from './navbar-label-picker.component';

describe('MailLabelPickerComponent', () => {
  let component: NavbarLabelPickerComponent;
  let fixture: ComponentFixture<NavbarLabelPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarLabelPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLabelPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
