import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../data/enum-interface';
import { characters } from '../data/fake-data';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  public characters: Character[] = characters;

  constructor() {}

  add(character: Character) {
    const randomId = Math.floor(Math.random() * Math.floor(100));
    this.characters.push({
      id: randomId,
      ...character
    });
  }

  getAll(): Observable<Character[]> {
    return of(characters);
  }

  getOneById(id: number) {
    return this.characters.find(char => id === char.id);
  }

  update(character: Character) {
    const index = this.characters.findIndex(c => c.id === character.id);
    this.characters.splice(index, 1, character);
  }

  delete(id: number) {
    const index = this.characters.findIndex(c => c.id === id)
    this.characters.splice(index, 1);
    return this.characters;
  }
}
