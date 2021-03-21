import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      /* debounceTime(300)aguarda até que o fluxo de novos eventos de string pause por 300 milissegundos antes de passar a última string. Você nunca fará solicitações com mais de 300 ms.*/

      // ignore new term if same as previous term
      distinctUntilChanged(),

      /* distinctUntilChanged() garante que uma solicitação seja enviada apenas se o texto do filtro for alterado. */

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );

    /* switchMap()chama o serviço de pesquisa para cada termo de pesquisa que passa por debouncee distinctUntilChanged. Ele cancela e descarta os observáveis ​​de pesquisa anteriores, retornando apenas o último serviço de pesquisa observável.*/
  }
}

/* A Subjecté uma fonte de valores observáveis e Observableele próprio. Você pode se inscrever em um Subjectcomo faria com qualquer um Observable.

Você também pode inserir valores nele Observablechamando seu next(value)método como o search()método faz.

O search()método é chamado por meio de uma associação de evento ao evento da caixa de texto input.
Cada vez que o usuário digita na caixa de texto, a ligação chama search()com o valor da caixa de texto, um "termo de pesquisa". O searchTermstorna-se um Observableemissor de um fluxo constante de termos de pesquisa. */


/* Com o operador switchMap , cada evento chave de qualificação pode acionar uma HttpClient.get()chamada de método. Mesmo com uma pausa de 300 ms entre as solicitações, você pode ter várias solicitações HTTP em andamento e elas podem não retornar no pedido enviado.

switchMap()preserva a ordem de solicitação original enquanto retorna apenas o observável da chamada de método HTTP mais recente. Os resultados de chamadas anteriores são cancelados e descartados.

Observe que o cancelamento de um searchHeroes() Observable anterior não cancela , na verdade, uma solicitação HTTP pendente. Os resultados indesejados são simplesmente descartados antes de chegarem ao código do seu aplicativo.*/