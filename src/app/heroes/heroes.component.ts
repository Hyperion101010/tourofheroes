import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero' ;
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../../app/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
   heroes : HERO[] ;
   selectedHero : Hero ;

   onselect(hero: Hero): void {
     this.selectedHero = hero;
   }
  constructor(private heroService: HeroService) {
  }

  getHeroes() : void {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=this.heroes) ;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
