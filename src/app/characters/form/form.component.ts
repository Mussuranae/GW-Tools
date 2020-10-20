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

  private id: string;
  // Form
  // @Output() newCharacter = new EventEmitter();
  characterForm: FormGroup;

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
    console.log(this.orders)
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      const char = this.charService.getOneById(this.id);
      this.characterForm = this.fb.group({
        name: new FormControl(char.name),
        date: new FormControl(char.date),
        race: new FormControl(char.race),
        class: new FormControl(char.class),
        role: new FormControl(char.role),
        order: new FormControl(char.order),
        ally: new FormControl(char.ally)
      });
    }
    else {
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
    console.log('coucou')
    if (this.characterForm.valid) {
      console.log('form valid')
      const newChar = {
        id: this.id,
        ...this.characterForm.value
      };
      if (newChar.id != null) {
        console.log('update')
        this.charService.update(newChar);
      } else {
        console.log('add')
        this.charService.add(newChar);
      }
    }
    this.router.navigate(['../personnages']);
  }
}
