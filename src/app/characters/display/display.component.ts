import { Component } from '@angular/core';

interface Character {
  name: string;
  // date: Date;
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
    { name: 'Sith Rousse', race: 'Humaine', class: 'Voleur' },
    { name: 'Mussy Rana', race: 'Norn', class: 'Nécromant' },
    { name: 'Shar Na Rök', race: 'Charr', class: 'Revenant' },
  ];

  constructor() {}

  addCharacter(event) {
    console.log(event);
    this.characters.push(event);
  }
}
