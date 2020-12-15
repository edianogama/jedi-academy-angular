import { Component } from '@angular/core';
import { Student } from './student/student.model'
import  { Master } from './masters/master.model'


@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'jedi-academy';
 
  students: Student[] = [
    {name: "Luke SkyWalker", isJedi: true, temple: "curosan"},
    {name: "Obito", isJedi: false},
    {name: "Leia", isJedi: false}
  ];
  masters: Master[] = [
    { name: "Luke Skywalker", swordColor: "green", position: 1 },
    { name: "Yoda", swordColor: "white", position: 2 },
    { name: "Obi-Wan Kenobi", swordColor: "light", position: 3 },
    { name: "Anakin Skywalker", swordColor: "blue-light", position: 4 },
    { name: "Qui-Gon Jinn", swordColor: "green-light", position: 5 },
    { name: "Mace Windu", swordColor: "fuchsia", position: 6 },

  ]
}
