import { TestBed } from '@angular/core/testing';

import { Alunos.GuardService } from './alunos.guard.service';

describe('Alunos.GuardService', () => {
  let service: Alunos.GuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Alunos.GuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
