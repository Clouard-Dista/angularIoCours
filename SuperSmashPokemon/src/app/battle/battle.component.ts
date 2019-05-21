import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../class/pokemon.class';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  public pokemonOne : Pokemon;
  public pokemonTwo : Pokemon;

  constructor(pokeOne : Pokemon, pokeTwo : Pokemon) {
    const first_start = this.getPokemonStartFight(pokeOne, pokeTwo);
    if(first_start === 1){
        this.pokemonOne = pokeOne;
        this.pokemonTwo = pokeTwo
    }else{
        this.pokemonOne = pokeTwo;
        this.pokemonTwo = pokeOne;
    }
  }

  public getPokemonStartFight(poke_one:Pokemon, poke_two:Pokemon) : number {
    if(poke_one._speed < poke_two._speed){
        return 2;
    }else{
        return 1;
    }
  }
selected
  ngOnInit() {
  }

}
