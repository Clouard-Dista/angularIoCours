import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../class/pokemon.class';

@Component({
  selector: 'app-select-screen',
  templateUrl: './select-screen.component.html',
  styleUrls: ['./select-screen.component.css']
})

export class SelectScreenComponent implements OnInit {


  pokeSelected : Pokemon[];
  constructor() {
    this.pokeSelected =[];
  }

  ngOnInit() {
  }

  isReady(){
    return this.pokeSelected[0]!=undefined && this.pokeSelected[1]!=undefined;
  }

  selectedPKM(pkm: Pokemon,arr :number) {
    console.log("2")
		this.pokeSelected[arr] = pkm;
	}
}
