import { Injectable, OnDestroy} from '@angular/core';
import {LoggerService} from './logger.service';
import {Pokemon} from './class/pokemon.class';
import {Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BattleByStepService implements OnDestroy {
    private pokemons: Pokemon[] = [];
    private nextAttack: number = 0;
    private curentStep: number = 0;
    private loop;

  	constructor(public logger: LoggerService) {
    }

    public param(pokemons: Pokemon[]): void {
        this.pokemons = pokemons;
        this.nextAttack = this.getFirst();
        this.curentStep = 0;
    }

    public getFirst(): number {
        return this.pokemons[0]._speed > this.pokemons[1]._speed ? 0 : 1;
    }

    public finish(): boolean {
        return this.pokemons[0].KO() || this.pokemons[1].KO();
    }

    public winner(): Pokemon {
        return this.pokemons[0].KO() ? this.pokemons[1] : this.pokemons[0];
    }

    public ready(): boolean {
        return this.pokemons.length !== 0;
    }

    private start(){
        const source = new Observable(observer => {
            const interval = setInterval(() => observer.next(this.step()), 1000);
            return () => {
                observer.complete();
                clearInterval(interval);
            };
        });
        this.loop = source.subscribe();
    }

    private pause(){
        this.loop.unsubscribe();
    }
    public startAndStop(pause: boolean){
        if(pause){
            this.pause();
        }else if (!this.finish()){
            this.start();
        }
    }
    public step(): boolean {
        if (this.finish()) {
            this.logger.push('The fight is over! <span class="' +
                this.winner()._type._name + '">'+
                this.winner()._name + '</span> Won ! ');
            this.loop.unsubscribe();
            return;
        }
        this.curentStep ++;
        let returnValue = 'Step ' + this.curentStep + ': <br>';
        const cible = this.nextAttack === 0 ? 1 : 0 ;
        returnValue += '<span class="' +
            this.pokemons[this.nextAttack]._type._name + '">'+
            this.pokemons[this.nextAttack]._name + '</span> attack <span class="' +
            this.pokemons[cible]._type._name + '">' +
            this.pokemons[cible]._name + '</span> '
        returnValue += this.pokemons[this.nextAttack]._attack.play(this.pokemons[cible]);
        this.nextAttack = cible;
        this.logger.push(returnValue);
        return true;
    }

    ngOnDestroy() { this.loop.unsubscribe(); }
}
