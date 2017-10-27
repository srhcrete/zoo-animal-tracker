import { Component } from '@angular/core';
import {Animal} from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo Animal Tracker</h1>
    <h3>Current Date: {{month}}/{{day}}/{{year}}</h3>
    <animal-list [childAnimalList]='masterAnimalList'></animal-list>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Liberty', 5, 'carnivore', 'eagle canyon', 2, 'male', 'fish', 'hot weather', 'bird of prey', 'eagle', '9/2/2014'),
    new Animal('Clark', 7, 'carnivore', 'cougar crossing', 4, 'male', 'rabbit', 'loud noises', 'big cat', 'cougar', '6/16/2012'),
    new Animal('Modoc', 16, 'herbavore', 'elephant lands', 3, 'female', 'peanuts', 'mice', 'elephant', 'elephant', '1/22/2009'),
  ];
}
