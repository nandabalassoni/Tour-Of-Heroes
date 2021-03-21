import { Injectable } from '@angular/core';
import { Hero } from './hero'; // formatação onde mostra id e nome dos herois
import { HEROES } from './mock-heroes'; //lista com os herois e dados deles
import { Observable, of } from 'rxjs'; // é uma das principais classes da biblioteca rxjs.
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  } // -> O método envia mensagem quando os heróis forem buscados

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { } /*modificando o construtor com um parâmetro que declara uma messageService propriedade privada.  O Angular injetará o singleton MessageServicenessa propriedade ao criar o HeroService. */
}

/* Um HeroServiceque todas as classes de aplicativo podem usar para obter heróis.
Em vez de criar esse serviço com new, você dependerá da injeção de dependência Angular para injetá-lo no HeroesComponentconstrutor.
Os serviços são uma ótima maneira de compartilhar informações entre classes que não se conhecem */



