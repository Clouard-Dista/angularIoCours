import { Battle } from './../class/battle.class';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pokemon } from '../class/pokemon.class';
import { BattleService } from '../battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers: [BattleService]
})
export class BattleComponent implements OnInit {

  pokemonOne: Pokemon;
  pokemonTwo: Pokemon;
  pause: boolean;
  // attackEvent = new EventEmitter<string>();

  @Input()
  set selectedFighter(value: Pokemon[]) {
    this.pokemonOne = value[0];
    this.pokemonTwo = value[1];

    /*const battle = new Battle(this.pokemonOne, this.pokemonTwo);
    battle.start();
    battle.win();*/
  }

  @Output() endFight = new EventEmitter<Pokemon>();
  @Output() attackEvent = new EventEmitter<string>();

  constructor(private battleService: BattleService) {
    // this.attackEvent = battleService.getAttackEvent();
    // console.log("Attack event " +  this.attackEvent.toString);
  }

  public getPokemonStartFight(poke_one: Pokemon, poke_two: Pokemon): number {
    if (poke_one._speed < poke_two._speed) {
        return 2;
    }
    return 1;
  }

  ngOnInit() {
    this.pause = true;
    // this.attackEvent = this.battleService.getAttackEvent();
  }
  first() {
    return this.pokemonOne._speed > this.pokemonTwo._speed ? this.pokemonOne : this.pokemonTwo;
  }
  second() {
    return this.pokemonOne._speed <= this.pokemonTwo._speed ? this.pokemonOne : this.pokemonTwo;
  }

  startBattle() {
    const first = this.first();
    const second = this.second();
    for(let i = 0; this.pokemonOne._hp>0 && this.pokemonTwo._hp>0  ;i++){

      console.log('TOUR ' + i)
      if(i % 2 === 0){
          console.log(this.pokemonOne._name + ' attaque ' + this.pokemonTwo._name + ' de ' + this.pokemonOne._attack._power + ' point(s)');
          this.pokemonTwo.receiveDamage(this.pokemonOne._attack._power);
          console.log('La vie de ' + this.pokemonTwo._name + ' est a  ' + this.pokemonTwo._hp);
          this.attackEvent.emit(this.pokemonOne._name + ' attaque ' + this.pokemonTwo._name + ' de ' + this.pokemonOne._attack._power + ' point(s)');
      } else {
          console.log(this.pokemonTwo._name + ' attaque ' + this.pokemonOne._name + ' de ' + this.pokemonTwo._attack._power + ' point(s)');
          this.pokemonOne.receiveDamage(this.pokemonTwo._attack._power);
          this.attackEvent.emit(this.pokemonTwo._name + ' attaque ' + this.pokemonOne._name + ' de ' + this.pokemonTwo._attack._power + ' point(s)');
          console.log('La vie de ' + this.pokemonOne._name + ' est à ' + this.pokemonTwo._hp);
      }
    }
  // if(this.finish() !== true) {
  //       console.log(first._name + ' attaque');
  //       first._attack.play(second);
  //       if (!second.KO()) {
  //         console.log(second._name + ' attaque');
  //         second._attack.play(first);
  //       }
  // }


}

}
