import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectFighterComponent } from '../select-fighter/select-fighter.component';
import { SelectScreenComponent } from './select-screen.component';

import { ElementType } from './../class/elementType.class';
import { Pokemon } from '../class/pokemon.class';
import { element } from 'protractor';

describe('SelectScreenComponent', () => {
  let component: SelectScreenComponent;
  let fixture: ComponentFixture<SelectScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectScreenComponent, SelectFighterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Pokemon was exist', () => {
    let pokemonOne = new Pokemon(1, 'pikachu', new ElementType(1, 'toto', [1]), 10, 12, );
    let pokemonTwo = new Pokemon(1, 'raichu', new ElementType(1, 'toto', [1]), 10, 12, );
    component.selectedPKM(pokemonOne, 0);
    component.selectedPKM(pokemonTwo, 1);
    expect(component.isReady()).toEqual(true);
  });

  it('Pokemon was not exist', () => {
    expect(component.isReady()).toEqual(false);
  });
});
