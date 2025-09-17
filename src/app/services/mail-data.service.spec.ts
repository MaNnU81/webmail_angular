import { TestBed } from '@angular/core/testing';

import { MailDataService } from './mail-data.service';

describe('MailDataService', () => {
  let service: MailDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
