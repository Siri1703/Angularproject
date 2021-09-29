import { TestBed } from '@angular/core/testing';

import { DeleteguardGuard } from './deleteguard.guard';

describe('DeleteguardGuard', () => {
  let guard: DeleteguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeleteguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
