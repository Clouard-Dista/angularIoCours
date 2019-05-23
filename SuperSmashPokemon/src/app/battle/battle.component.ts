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
  today: number;

  @Input() set selectedFighter(value: Pokemon[]) {
    this.pokemons = value;
    this.battleByStepService.param(this.pokemons);
  }

  @Output() endFight = new EventEmitter<Pokemon>();
  @Output() attackEvent = new EventEmitter<string>();

  back(){
    this.pokemons = [];
    this.pause = true;
    this.battleByStepService.logger.clear()
    this.endFight.emit(this.battleByStepService.winner());
  }

  constructor(private battleByStepService: BattleByStepService) {
    setInterval(() => {
      this.today = Date.now();
    }, 1);
  }

  ngOnInit() {
    this.pause = true;
  }
}
