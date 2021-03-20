import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //importando Hero
import { HEROES } from '../mock-heroes'; // importando o mock-heroes, lista com os heróis

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {  //refatorando Hero e inicializando com id e name

  heroes = HEROES;

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
