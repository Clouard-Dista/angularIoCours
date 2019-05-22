import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Pokemon } from '../class/pokemon.class';

@Component({
  selector: 'app-battle-logger',
  templateUrl: './battle-logger.component.html',
  styleUrls: ['./battle-logger.component.css']
})
export class BattleLoggerComponent implements OnInit {

  attackEvent = new EventEmitter<string>();

  constructor() { }


  @Input() attaqueEvent: string;


  ngOnInit() {
    // this.attackEvent = ;
  }

}
