import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailLabelSelectorComponent } from './mail-label-selector.component';

describe('MailLabelSelectorComponent', () => {
  let component: MailLabelSelectorComponent;
  let fixture: ComponentFixture<MailLabelSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailLabelSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailLabelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
