import { TestBed, inject } from '@angular/core/testing';

import { PreviewerService } from './previewer.service';

describe('PreviewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviewerService]
    });
  });

  it('should be created', inject([PreviewerService], (service: PreviewerService) => {
    expect(service).toBeTruthy();
  }));
});
