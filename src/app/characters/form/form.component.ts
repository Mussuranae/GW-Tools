import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Orders, Classes, Races } from '../../enum';

@Component({
  selector: 'character-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // Form
  @Output() newCharacter = new EventEmitter();
  characterForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    race: new FormControl(''),
    class: new FormControl(''),
    role: new FormControl(''),
    order: new FormControl(''),
    ally: new FormControl(''),
  });

  // Enum preparation
  public orders = Orders;
  public ordersArray: string[];
  public classes = Classes;
  public classesArray: string[];
  public races = Races;
  public racesArray: string[];

  constructor() {}

  ngOnInit() {
    this.ordersArray = Object.keys(this.orders);
    this.classesArray = Object.keys(this.classes);
    this.racesArray = Object.keys(this.races);
  }

  addCharacter() {
    this.newCharacter.emit(this.characterForm.value);
  }
}
