import {Pokemon} from './pokemon.class';
import {ElementType} from './elementType.class';

export class Attack {
    _name :string;
    _accuracy :number;
    _power :number;
    _type :ElementType;

constructor(name:string, type :ElementType, accuracy :number, power :number) {
    this._name = name;
    this._accuracy = accuracy;
    this._power = power;
    this._type = type;
}

play(cible: Pokemon){
  const rand = 100*Math.random();
  if(rand <= this._accuracy){
      cible.pv(this._power);
      console.log('et fait '+this._power+' de dommage');
  }else{
    console.log('et rate son attaque');
  }
  console.log('avec '+this._name);
  }
}
