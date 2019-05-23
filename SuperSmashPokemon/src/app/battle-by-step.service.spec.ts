import { TestBed } from '@angular/core/testing';

import { BattleByStepService } from './battle-by-step.service';

describe('BattleByStepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BattleByStepService = TestBed.get(BattleByStepService);
    expect(service).toBeTruthy();
  });
});
