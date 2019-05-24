import {ElementType} from './ElementType.class';
import {Attack} from './attack.class';

export class Pokemon {
    _id :string;
    _name :string;
    _type :ElementType;
    _speed :number;
    _hpMax :number;
    _hp :number;
    _attack :Attack;

    constructor(id: number, name: string, type: ElementType, speed: number, pv: number, attack?: Attack) {
        this._name = name.charAt(0).toUpperCase()
        + name.slice(1).toLowerCase();
        this._type = type;
        this._speed = speed;
        this._hp = pv;
        this._hpMax = pv;
        this._attack = attack || new Attack('Hidden Power' ,type ,80 , -20);
        this._id = (id < 10 ? '0' : '') + ( id < 100 ? '0' : '') + id;
    }

    KO() {
        return this._hp === 0;
    }
    pv(value: number) {
        this._hp += value;
        if (this._hp > this._hpMax){
            this._hp = this._hpMax;
        } else if (this._hp <= 0) {
            this._hp = 0;
        }
    }
}
