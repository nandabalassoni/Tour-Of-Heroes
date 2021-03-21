import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //importando Hero
import { HeroService } from '../hero.service';
//import { HEROES } from '../mock-heroes'; // importando o mock-heroes, lista com os heróis

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {  //refatorando Hero e inicializando com id e name

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  /* O parâmetro simultaneamente define uma heroServicepropriedade privada e a identifica como um HeroServicelocal de injeção.

Quando o Angular cria um HeroesComponent, o sistema de injeção de dependência define o heroServiceparâmetro para a instância singleton de HeroService.*/


  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }  //função para recuperar os heróis do serviço.

  /* A nova versão espera que o Observableemita a série de heróis - o que pode acontecer agora ou daqui a alguns minutos. 
  Em seguida, subscribepassa a matriz emitida para o retorno de chamada, que define a heroespropriedade do componente .
Essa abordagem assíncrona funcionará quando as HeroServicesolicitações forem herdeiras do servidor.*/

}
