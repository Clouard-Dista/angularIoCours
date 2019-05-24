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

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleComponent);
    component = fixture.componentInstance;
    let pokemons = [];
    pokemons.push(new Pokemon(1, 'pikachu', new ElementType(1, 'toto', [1]), 30, 12, ));
    pokemons.push(new Pokemon(1, 'dracaufeu', new ElementType(1, 'toto', [1]), 15, 12, ));
    component.selectedFighter = pokemons;
    fixture.detectChanges();
  });

  // id: number, name: string, type: ElementType, speed: number, pv: number, attack?: Attack ||pokemon
  // name: string, type: ElementType, accuracy: number, power: number ||attack
  it('should create', () => {
   expect(component).toBeTruthy();
  });

  it('Back clear pokemons', () => {
    component.back();
    expect(component.pokemons).toEqual([]);
   });

  it('Back set pause true', () => {
    component.back();
    expect(component.pause).toEqual(true);
   });

});
