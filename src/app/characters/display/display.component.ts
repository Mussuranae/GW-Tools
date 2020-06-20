import { Component } from '@angular/core';

interface Character {
  name: string;
  date: Date;
  race: string;
  class: string;
}

@Component({
  selector: 'character-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  characters: Character[] = [
    { name: 'Sith Rousse', date: new Date(), race: 'Humaine', class: 'Voleur' },
    { name: 'Mussy Rana', date: new Date(), race: 'Norn', class: 'Nécromant' },
    { name: 'Shar Na Rök', date: new Date(), race: 'Charr', class: 'Revenant' },
  ];

  constructor() {}

  addCharacter(event) {
    console.log(event);
    this.characters.push(event);
  }
}
