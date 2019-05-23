import { Pokemon } from './pokemon.class';
import { ElementType } from './ElementType.class';

describe('PokemonClass', () => {

    it('should create', () => {
        const element =  new ElementType(1, 'toto', [1]);
        const pA1 = new Pokemon(1, 'pikachu', element, 10, 12, );
        expect(pA1).toBeTruthy();
      });

    it('Is KO', () => {
        const element =  new ElementType(1, 'toto', [1]);
        const pA1 = new Pokemon(1, 'pikachu', element, 10, 0, );
        expect(pA1.KO()).toEqual(true);
      });

    it('Is not KO', () => {
    const element =  new ElementType(1, 'toto', [1]);
    const pA1 = new Pokemon(1, 'pikachu', element, 10, 12, );
    expect(pA1.KO()).toEqual(false);
    });

    it('Damage = 20', () => {
      let element =  new ElementType(1, 'toto', [1]);
      let pA1 = new Pokemon(1, 'pikachu', element, 10, 50, );
      pA1.receiveDamage(20);
      expect(pA1._hp).toEqual(30);
    });

    it('Life > Lifemax So  life = LifeMax', () => {
        let element =  new ElementType(1, 'toto', [1]);
        let pA1 = new Pokemon(1, 'pikachu', element, 10, 20, );
        pA1.pv(30);
        expect(pA1._hp).toEqual(20);
      });

    it('life = life += Params so Life >0 but Life < LifeMax', () => {
        let element =  new ElementType(1, 'toto', [1]);
        let pA1 = new Pokemon(1, 'pikachu', element, 10, 30, );
        pA1.receiveDamage(20);
        pA1.pv(10);
        expect(pA1._hp).toEqual(20);
      });

    it('life < 0 So  life = 0', () => {
      let element =  new ElementType(1, 'toto', [1]);
      let pA1 = new Pokemon(1, 'pikachu', element, 10, 20, );
      pA1.receiveDamage(40);
      expect(pA1._hp).toEqual(0);
    });
});
