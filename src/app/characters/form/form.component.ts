import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'character-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() newCharacter = new EventEmitter();
  characterForm = new FormGroup({
    name: new FormControl(''),
    race: new FormControl(''),
    class: new FormControl('')
  });

  constructor() {}

  addCharacter() {
    console.log(this.characterForm.value);
    this.newCharacter.emit(this.characterForm.value);
  }
}
