import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {Pokemon} from './class/pokemon.class';
@Injectable({
  providedIn: 'root'
})

export class BattleByStepService {
    private pokemons: Pokemon[] = [];
    private nextAttack: number = 0;
    private curentStep: number = 0;

  	constructor(private logger: LoggerService) { }

    public param(pokemons: Pokemon[]): void {
        this.pokemons = pokemons;
        this.nextAttack = this.getFirst();
        this.curentStep = 0;
    }

    private getFirst(): number {
        return this.pokemons[0]._speed > this.pokemons[1]._speed ? 0 : 1;
    }

    public finish(): boolean {
        return this.pokemons[0].KO() || this.pokemons[1].KO();
    }

    public step(): string {
        if (this.finish()) {
            return 'The fight is over';
        }
        this.curentStep ++;
        let returnValue = 'Step ' + this.curentStep + ': ';
        const cible = this.nextAttack === 0 ? 1 : 0 ;
        returnValue += this.pokemons[this.nextAttack]._name + ' attack ' + this.pokemons[cible]._name + ' ';
        returnValue += this.pokemons[this.nextAttack]._attack.play(this.pokemons[cible]);
        this.nextAttack = cible;
        this.logger.push(returnValue);
    }
}