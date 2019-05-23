import { async, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BattleService } from './battle.service';
import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {Pokemon} from './class/pokemon.class';

describe('BattleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BattleService, LoggerService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }));

  it('should be created', async(() => {
    const service: BattleService = TestBed.get(BattleService);
    expect(service).toBeTruthy();
  }));

 /* it('get first ok', async(() => {
    const service: BattleService = TestBed.get(BattleService);
    expect(service).toBeTruthy();
  }));*/

});
