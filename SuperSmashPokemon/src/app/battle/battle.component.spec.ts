import { ElementType } from './../class/elementType.class';
import { Attack } from './../class/attack.class';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleComponent } from './battle.component';
import { Pokemon } from '../class/pokemon.class';
import { element } from 'protractor';


describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    Attack attack = new Attack();
    ElementType element=  new ElementType(1 "toto", [1])
    Pokemon pA = new Pokemon(1,"a", ,10,12, )
    component.getPokemonStartFight(new Pokemon())
});
