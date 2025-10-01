import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailLabelprovaComponent } from './mail-labelprova.component';

describe('MailLabelprovaComponent', () => {
  let component: MailLabelprovaComponent;
  let fixture: ComponentFixture<MailLabelprovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailLabelprovaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailLabelprovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
