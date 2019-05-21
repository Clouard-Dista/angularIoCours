import {ElementType} from './elementType.class';
export class Type {
    acier :ElementType;
    combat :ElementType;
    dragon :ElementType;
    eau :ElementType;
    electrik :ElementType;
    fee :ElementType;
    feu :ElementType;
    glace :ElementType;
    insecte :ElementType;
    normal :ElementType;
    plante :ElementType;
    poison :ElementType;
    psy :ElementType;
    roche :ElementType;
    sol :ElementType;
    spectre :ElementType;
    tenebres :ElementType;
    vol :ElementType;
	constructor(){
		this.acier = new ElementType(0, 'acier',[1,1.5,1,2,1,1.5,1,1,1,1.5,1,2,1,1.5,1,1.5,1,1.5,1,1.5,1,0,1,1.5,1,1.5,1,2,1,1,1,1.5]);
		this.combat = new ElementType(1, 'combat',[1,1,1,1,1,1,2,1,1,1,1.5,1,1,1,1,2,1,1.5,1,1,1,1.5,1,2]);
		this.dragon = new ElementType(2, 'dragon',[1,1,1,2,1,1.5,1,1.5,1,2,1,1.5,1,2,1,1,1,1.5,1,1,1,1,1,1,1]);
		this.eau = new ElementType(3, 'eau',[1,1.5,1,1,1,1.5,1,2,1,1,1.5,1,1.5,1,1,1,2,1,1,1,1,1,1,1]);
		this.electrik = new ElementType(4, 'electrik',[1,1.5,1,1,1,1,1.5,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1.5]);
		this.fee = new ElementType(5, 'fée',[1,2,1,1.5,1,0,1,1,1,1,1,1,1.5,1,1,1,2,1,1,1,1,1,1.5,1]);
		this.feu = new ElementType(6, 'feu',[1,1.5,1,1,1,2,1,1,1.5,1,1.5,1,1.5,1,1.5,1,1,1.5,1,1,1,2,1,2,1,1,1]);
		this.glace = new ElementType(7, 'glace',[1,2,1,2,1,1,1,1,1,2,1,1.5,1,1,1,1,1,1,2,1,1,1,1]);
		this.insecte = new ElementType(8, 'insecte',[1,1,1.5,1,1,1,1,1,2,1,1,1,1,1.5,1,1,1,2,1,1.5,1,1,1,2]);
		this.normal = new ElementType(9, 'normal',[1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1]);
		this.plante = new ElementType(10, 'plante',[1,1,1,1,1.5,1,1.5,1,1,2,1,2,1,2,1,1,1.5,1,2,1,1,1,1.5,1,1,1,2]);
		this.poison = new ElementType(11, 'poison',[1,1,1.5,1,1,1,1,1.5,1,1,1,1.5,1,1,1.5,1,1.5,1,2,1,1,2,1,1,1]);
		this.psy = new ElementType(12, 'psy',[1,1,1.5,1,1,1,1,1,1,1,2,1,1,1,1,1.5,1,1,1,2,1,2,1]);
		this.roche = new ElementType(13, 'roche',[1,2,1,2,1,1,2,1,1,1,1.5,1,1,1,1.5,1,2,1,1.5,1,1,1,2,1,1,1,1.5]);
		this.sol = new ElementType(14, 'sol',[1,1,1,1,2,1,0,1,1,1,2,1,1,1,2,1,1.5,1,1,1.5,1,1,1,1]);
		this.spectre = new ElementType(15, 'spectre',[1,1,0,1,1,1,1,1,1,1,1.5,1,0,1,1,1.5,1,1,1,1,2,1,2,1]);
		this.tenebres = new ElementType(16, 'ténèbres',[1,1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,0,1,1,1,1.5,1,1.5,1]);
		this.vol = new ElementType(17, 'vol',[1,1,1.5,1,1,1,2,1,1,1,2,1,1.5,1,1,1.5,1,1,1,2,1,0,1,1,1]);
	}
}
