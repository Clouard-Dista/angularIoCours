import {Pokemon} from './pokemon.class';

export class Battle {
    _Pokemon1 :Pokemon;
    _Pokemon2 :Pokemon;

    constructor(pokemon1:Pokemon, pokemon2:Pokemon) {
        this._Pokemon1 = pokemon1;
        this._Pokemon2 = pokemon2;
    }
    first (){
        return this._Pokemon1._speed>this._Pokemon2._speed ? this._Pokemon1 : this._Pokemon2;
    }
    second (){
        return this._Pokemon1._speed<=this._Pokemon2._speed ? this._Pokemon1 : this._Pokemon2;
    }
    finish(){
        return this._Pokemon1.KO()||this._Pokemon2.KO()
    }
    win(){
        console.log((this._Pokemon1.KO() ? this._Pokemon2 : this._Pokemon1)._name+' a gagne')
        return this._Pokemon1.KO() ? this._Pokemon2 : this._Pokemon1
    }
    start(){
        const first = this.first();
        const second = this.second();
        while(this.finish()!= true){
            console.log(first._name+' attaque')
            first._attack.play(second);
            if(!second.KO()){
              console.log(second._name+' attaque')
              second._attack.play(first);
            }
        }
    }
}
