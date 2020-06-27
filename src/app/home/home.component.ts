import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cards = [
    {title: 'Personnages', description: 'Liste des personnages', link: '../personnages'},
    {title: 'Date', description: 'Dates importantes', link: '../date'},
    // {title: 'Histoire', description: 'Détails de l\'histoire par personnage', link: '../histoire'},
    {title: 'Design', description: 'Test pour design', link: '../design'},
  ];

  constructor() { }

}
