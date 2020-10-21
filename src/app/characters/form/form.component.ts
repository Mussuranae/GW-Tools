import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Orders, Classes, Races } from '../../data/enum-interface';
import { Character } from '../../data/enum-interface';

@Component({
  selector: 'character-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public id: number;
  // Form
  // @Output() newCharacter = new EventEmitter();
  characterForm: FormGroup;
  character: Character;

  // Const preparation
  public orders = Orders;
  public classes = Classes;
  public races = Races;

  constructor(
    private fb: FormBuilder,
    private charService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = Number(idParam);
    if (this.id !== 0) {
      this.character = this.charService.getOneById(this.id);
      this.characterForm = this.fb.group({
        name: this.character.name,
        date: this.character.date,
        race: this.character.race,
        class: this.character.class,
        role: this.character.role,
        order: this.character.order,
        ally: this.character.ally
      });
    } else {
      this.characterForm = this.fb.group({
        name: new FormControl(''),
        date: new FormControl(''),
        race: new FormControl(''),
        class: new FormControl(''),
        role: new FormControl(''),
        order: new FormControl(''),
        ally: new FormControl(''),
      });
    }
  }

  onSubmit() {
    if (this.characterForm.valid) {
      if (this.id !== 0) {
        this.charService.update({
          id: this.id,
          ...this.characterForm.value
        });
      } else {
        this.charService.add(this.characterForm.value);
      }
      this.router.navigate(['../personnages']);
    }
  }
}
