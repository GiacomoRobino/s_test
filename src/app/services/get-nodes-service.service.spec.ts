import { TestBed } from '@angular/core/testing';

import { GetNodesServiceService } from './get-nodes-service.service';

describe('GetNodesServiceService', () => {
  let service: GetNodesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNodesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
