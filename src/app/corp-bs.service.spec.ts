import { TestBed } from '@angular/core/testing';

import { CorpBsService } from './corp-bs.service';

describe('CorpBsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorpBsService = TestBed.get(CorpBsService);
    expect(service).toBeTruthy();
  });
});
