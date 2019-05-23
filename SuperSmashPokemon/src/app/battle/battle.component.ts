import { Battle } from './../class/battle.class';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pokemon } from '../class/pokemon.class';
import { BattleByStepService } from '../battle-by-step.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers: [BattleByStepService]
})
export class BattleComponent implements OnInit {

  pokemons: Pokemon[];
  pause: boolean;
  today: number = Date.now();
  
  @Input() set selectedFighter(value: Pokemon[]) {
    this.pokemons = value;
    this.battleByStepService.param(this.pokemons);

    for(let i = 0 ; i < 10; i++)
      this.battleByStepService.step();
  }

  @Output() endFight = new EventEmitter<Pokemon>();

  constructor(private battleByStepService: BattleByStepService) {
  }

  ngOnInit() {
    this.pause = true;
  }
}
