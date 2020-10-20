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
    this.characters.push(character);
  }

  getAll(): Observable<Character[]> {
    return of(characters);
  }

  getOneById(id: string) {
    return this.characters.find(char => id === char.id);
  }

  update(character: Character) {
    return this.characters.splice(1, 1, character);
  }

  delete() {}
}
