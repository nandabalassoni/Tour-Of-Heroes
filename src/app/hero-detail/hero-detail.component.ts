import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  //@Input() hero: Hero;  //Este componente simplesmente recebe um objeto herói por meio de sua heropropriedade e o exibe

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  /* O ActivatedRoutecontém informações sobre a rota para esta instância do HeroDetailComponent. Este componente está interessado no pacote de parâmetros da rota extraído da URL. O parâmetro "id" é o iddo herói a ser exibido.

O HeroServiceobtém dados do herói do servidor remoto e este componente os usará para exibir o herói .

O locationé um serviço Angular para interagir com o navegador. Você o usará mais tarde para navegar de volta à visualização que navegou aqui. */

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  /* ersiste as mudanças de nome do herói usando o updateHero()método de serviço do herói e, em seguida, navega de volta para a visualização anterior. */

}
