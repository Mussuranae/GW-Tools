import { Component } from '@angular/core';
import { Orders, Classes, Races } from '../../enum';

interface Character {
  name: string;
  date: Date;
  race: string;
  class: string;
  role: string;
  order: string;
  ally: string;
}

@Component({
  selector: 'character-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  characters: Character[] = [
    { name: 'Sith Rousse', date: new Date(), race: 'humain', class: 'voleur', role: 'McM', order: 'soupir', ally: '' },
    { name: 'Mussy Rana', date: new Date(), race: 'norn', class: 'necromant', role: 'McM', order: 'durmand', ally: 'Ogre' },
    { name: 'Shar Na Rök', date: new Date(), race: 'charr', class: 'revenant', role: 'McM', order: 'soupir', ally: 'Skritt' },
  ];
  public orders = Orders;
  public classes = Classes;
  public races = Races;

  constructor() {}

  addCharacter(event) {
    console.log(event);
    this.characters.push(event);
  }
}
