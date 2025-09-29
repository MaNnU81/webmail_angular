import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailLabelPickerComponent } from './mail-label-picker.component';

describe('MailLabelPickerComponent', () => {
  let component: MailLabelPickerComponent;
  let fixture: ComponentFixture<MailLabelPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailLabelPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailLabelPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
