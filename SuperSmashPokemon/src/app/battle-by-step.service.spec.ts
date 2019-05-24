import { ElementType } from './class/elementType.class';
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


  it('find First', () => {
    let aPokemon = new Pokemon(1, 'a', new ElementType(1, 'toto', [1]), 30, 12, );
    let bPokemon = new Pokemon(1, 'a', new ElementType(1, 'toto', [1]), 30, 12, );
    const service: BattleByStepService = TestBed.get(BattleByStepService);

    service.param([aPokemon, bPokemon]);

    expect(service).toBeTruthy();
  });


  it('get  winner', () => {
    let aPokemon = new Pokemon(1, 'a', new ElementType(1, 'toto', [1]), 30, 12, );
    let bPokemon = new Pokemon(1, 'a', new ElementType(1, 'toto', [1]), 30, 12, );
    const service: BattleByStepService = TestBed.get(BattleByStepService);
    service.param([aPokemon, bPokemon]);
    expect(service.getFirst()).toEqual(1);

  });


  it('was  finnish', () => {
    let aPokemon = new Pokemon(1, 'a', new ElementType(1, 'toto', [1]), 30, 12, );
    let bPokemon = new Pokemon(1, 'a', new ElementType(1, 'toto', [1]), 30, 12, );
    const service: BattleByStepService = TestBed.get(BattleByStepService);
    service.param([aPokemon, bPokemon]);
    expect(service.finish).toBeTruthy();

  });

  it('verify is ready', () => {
    let aPokemon = new Pokemon(1, 'a', new ElementType(1, 'toto', [1]), 30, 12, );
    let bPokemon = new Pokemon(1, 'a', new ElementType(1, 'toto', [1]), 30, 12, );
    const service: BattleByStepService = TestBed.get(BattleByStepService);
    service.param([aPokemon, bPokemon]);
    expect(service.ready()).toBeTruthy();
  });


});
