import { TestBed } from '@angular/core/testing';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BattleByStepService } from './battle-by-step.service';
import {LoggerService} from './logger.service';
import {Pokemon} from './class/pokemon.class';


describe('BattleByStepService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BattleByStepService, LoggerService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }));

  it('should be created', () => {
    const service: BattleByStepService = TestBed.get(BattleByStepService);
    expect(service).toBeTruthy();
  });
});
