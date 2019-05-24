import { SelectFighterComponent } from './select-fighter/select-fighter.component';
import { Component } from '@angular/core';
import { Pokemon } from './class/pokemon.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperSmashPokemon';
  selectedFighter: Pokemon[];
  selectedFighterAllow: boolean;
  winner: Pokemon;
  constructor(){
    this.selectedFighterAllow = true;
  }
  selectedFighterFnc(pkm: Pokemon[]){
    this.selectedFighter = pkm;
    this.selectedFighterAllow = false;
  }
  endFight(win: Pokemon){
    this.selectedFighter = [];
    this.selectedFighterAllow = true;
  }
}
