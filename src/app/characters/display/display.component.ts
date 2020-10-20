import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character, Classes, Orders, Races } from '../../data/enum-interface';

@Component({
  selector: 'character-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public characters: Character[];
  public orders = Orders;
  public classes = Classes;
  public races = Races;

  constructor(private charService: CharacterService) {}

  ngOnInit() {
    this.charService.getAll().subscribe(characters => this.characters = characters);
  }
}
