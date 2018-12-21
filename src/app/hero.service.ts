import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import { Hero } from './heroes/hero';
import { Observable , of } from 'rxjs';
import { MessagesService } from '../app/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroSerice: fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessagesService) { }
}
