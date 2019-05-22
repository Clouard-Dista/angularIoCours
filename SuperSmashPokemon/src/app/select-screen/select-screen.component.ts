import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Pokemon } from '../class/pokemon.class';

@Component({
  selector: 'app-select-screen',
  templateUrl: './select-screen.component.html',
  styleUrls: ['./select-screen.component.css']
})

export class SelectScreenComponent implements OnInit {


  pokeSelected: Pokemon[];
  constructor() {
    this.pokeSelected = [];
  }

  @Input()
  set rest(value: boolean ) {
    if (value){
      this.pokeSelected = [];
    }
  }
  @Output() selectedFighter = new EventEmitter<Pokemon[]>();

  ngOnInit() {
  }

  isReady() {
    return this.pokeSelected[0] !== undefined && this.pokeSelected[1] !== undefined;
  }

  selectedPKM(pkm: Pokemon, arr: number) {
    this.pokeSelected[arr] = pkm;
  }

  startfight() {
    this.selectedFighter.emit(this.pokeSelected);
  }
}
