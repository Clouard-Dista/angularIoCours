export class ElementType {
	_id :number;
    _name :string;
    _resistance :number[];

	constructor(id:number, name:string, resistance:number[]) {
		this._id = id;
        this._name = name;
        this._resistance = resistance;
	}
}
