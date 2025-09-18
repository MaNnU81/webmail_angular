import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailDetailComponent } from './mail-detail.component';

describe('MessageViewerComponent', () => {
  let component: MailDetailComponent;
  let fixture: ComponentFixture<MailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
