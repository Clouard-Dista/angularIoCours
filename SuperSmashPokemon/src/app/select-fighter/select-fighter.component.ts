import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pokemon } from '../class/pokemon.class';
import {Type} from '../class/type.class';
const pokedata = require('../../assets/pokedex.json');

@Component({
  selector: 'app-select-fighter',
  templateUrl: './select-fighter.component.html',
  styleUrls: ['./select-fighter.component.css']
})
export class SelectFighterComponent implements OnInit {
  pokelist : Pokemon[];
  idSelected : string;
  pkmSelected : Pokemon;
  title : string;
  constructor() {
    this.idSelected = "";
    this.pokelist = [] ;
    for(let i = 0; i < pokedata.length; i++){
      this.pokelist.push(new Pokemon(
        pokedata[i]["id"],
        pokedata[i]["name"],
        new Type()[pokedata[i]["type"][0]],
        pokedata[i]["base"]["Speed"],
        pokedata[i]["base"]["HP"])
      );
    };
  }

  @Output() selectPKMFunc = new EventEmitter<Pokemon>();
	@Input()
	set selectId(value: string) {
    this.idSelected = value;
  }
	@Input()
	set titleI(value: string) {
    this.title = value;
  }
  selectid(id: number) {
    let value = this.pokelist[id];
		this.idSelected = value._id;
    this.pkmSelected = value;
		this.selectPKMFunc.emit(value);
	}

  ngOnInit() {
  }

}
