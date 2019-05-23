import {Pokemon} from './pokemon.class';
import {ElementType} from './elementType.class';

export class Attack {
    _name: string;
    _accuracy: number;
    _power: number;
    _type: ElementType;

  constructor(name: string, type: ElementType, accuracy: number, power: number) {
      this._name = name;
      this._accuracy = accuracy;
      this._power = power;
      this._type = type;
  }

  play(cible: Pokemon) : string{
    let resumFight = "";
    const rand = 100 * Math.random();
    if (rand <= this._accuracy) {
        let bonus = cible._type._resistance[this._type.id];
        let dega = this._power * bonus;
        cible.pv(dega);
        resumFight += 'and done ' + ( - this._power) + ' of damage, with ' + this._name + '(' + this._type._name + ')';
        switch(bonus) {
          case 0:
            resumFight += 'and <span class="notEffective">It does not affect him.</span>';
            break;
          case 1.5:
          case 2:
            resumFight += 'and <span class="effective"> It\'s super effective!</span>';
            break;
      }
    } else {
      resumFight += 'and misses his attack ' + this._name + '<img  src="../../assets/types/'+cible._type._name+'.jpg" width="30" height="15">.';
    }
    return resumFight;
  }
}
