import { ElementType } from './../class/elementType.class';
import { Attack } from './../class/attack.class';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BattleComponent } from './battle.component';
import { Pokemon } from '../class/pokemon.class';
import { element } from 'protractor';


describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(BattleComponent);
    component = fixture.componentInstance;
    component.pokemons[0] = new Pokemon(1, 'pikachu', new ElementType(1, 'toto', [1]), 30, 12, );
    component.pokemons[1] = new Pokemon(1, 'dracaufeu', new ElementType(1, 'toto', [1]), 15, 12, );
    fixture.detectChanges();
  });*/

  // id: number, name: string, type: ElementType, speed: number, pv: number, attack?: Attack ||pokemon
  // name: string, type: ElementType, accuracy: number, power: number ||attack
  it('should create', () => {
    /*let element =  new ElementType(1, 'toto', [1]);
    let attack = new Attack('attack_1', element, 20, 50);
    let pA1 = new Pokemon(1, 'a', element, 10, 12, );
    let pA2 = new Pokemon(1, 'a', element, 10, 12, );
   component.getPokemonStartFight(pA1, pA2);*/
  // expect(component).toBeTruthy();
  });
});
